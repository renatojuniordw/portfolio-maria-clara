/*******************************************************
 * Configurações
 *******************************************************/

// (Opcional) Se você já souber o ID da pasta onde ficam os uploads do seu Form,
// cole aqui para forçar o uso dessa pasta. Senão, deixe em branco ("").
// Ex.: "1AbCdEfGhIjKlMnOpQrStUvWxYz"
const RESPONSES_ROOT_FOLDER_ID = "";

// Nome EXATO do arquivo modelo de procuração dentro da pasta raiz de uploads do Forms
const TEMPLATE_NAME = "MODELO_PROCURAÇÃO";

// Nome do documento de procuração que será gerado
const PROC_DOC_PREFIX = "PROCURAÇÃO - ";

// Nome do documento-resumo com as respostas (sem anexos)
const RESUMO_DOC_PREFIX = "RESPOSTAS - ";

// Nome do campo obrigatório de CPF no Forms (precisa bater com o título da pergunta)
const CPF_FIELD_TITLE = "CPF";

/*******************************************************
 * Gatilho principal - executado ao enviar o formulário
 *******************************************************/
function onFormSubmit(e) {
    try {
        if (!e || !e.response) {
            throw new Error("Evento inválido. Este script deve ser acionado por um gatilho de envio do Google Forms.");
        }

        const form = FormApp.getActiveForm();
        const formTitle = form.getTitle();
        const itemResponses = e.response.getItemResponses();

        // 1) Monta o mapa de respostas (pergunta -> resposta)
        const answersMap = buildAnswersMap(itemResponses);

        // 2) Extrai CPF
        const cpf = extractCpf(answersMap, CPF_FIELD_TITLE);
        if (!cpf) {
            throw new Error("CPF não encontrado na resposta. Verifique o título exato do campo CPF no formulário.");
        }

        // 3) Descobre a pasta raiz dos uploads do Forms
        //    - se houver uploads, pegamos via arquivo -> pasta pergunta -> pasta raiz
        //    - se não houver upload nessa resposta, tenta constante RESPONSES_ROOT_FOLDER_ID
        //    - fallback: busca por nome (menos robusto, evita se possível)
        const rootUploadsFolder = resolveRootUploadsFolder(e, formTitle);
        if (!rootUploadsFolder) {
            throw new Error("Não foi possível localizar a pasta raiz de uploads do Forms. " +
                "Envie pelo menos um arquivo no formulário OU preencha RESPONSES_ROOT_FOLDER_ID.");
        }

        // 4) Cria / obtém a pasta do CPF dentro da pasta raiz
        const cpfFolder = ensureCpfFolder(rootUploadsFolder, cpf);

        // 5) Cria documento-resumo (perguntas & respostas) — sem mover arquivos
        const resumoDoc = createSummaryDoc(cpfFolder, formTitle, answersMap, cpf);

        // 6) Renomeia e move os arquivos enviados
        processFileUploads(e, cpf, cpfFolder);

        // 7) Gera documento de procuração a partir do modelo
        const templateFile = findTemplateInFolder(rootUploadsFolder, TEMPLATE_NAME);
        if (!templateFile) {
            throw new Error("Modelo de procuração não encontrado: " + TEMPLATE_NAME +
                ". Coloque o arquivo na mesma pasta raiz de uploads do Forms.");
        }
        const procDoc = generateProcDocFromTemplate(templateFile, cpfFolder, cpf, answersMap);

        // (Opcional) Log para auditoria
        console.log("Fluxo concluído com sucesso para CPF:", cpf,
            "\nResumo:", resumoDoc.getUrl(),
            "\nProcuração:", procDoc.getUrl(),
            "\nPasta CPF:", cpfFolder.getUrl()
        );

    } catch (err) {
        console.error("Erro no onFormSubmit:", err);
        // (Opcional) Enviar e-mail para o escritório avisando do erro
        // MailApp.sendEmail("seu-email@seu-dominio.com", "Erro no Forms", String(err));
    }
}

/*******************************************************
 * Instala o gatilho de envio do formulário (rodar 1x)
 *******************************************************/
function setupTrigger() {
    const form = FormApp.getActiveForm();
    if (!form) throw new Error("Abra o Apps Script a partir do seu Formulário (FormApp).");

    // Remove gatilhos duplicados
    ScriptApp.getProjectTriggers().forEach(t => {
        if (t.getHandlerFunction() === "onFormSubmit") {
            ScriptApp.deleteTrigger(t);
        }
    });

    ScriptApp.newTrigger("onFormSubmit")
        .forForm(form)
        .onFormSubmit()
        .create();

    console.log("Gatilho 'onFormSubmit' instalado com sucesso para o formulário:", form.getTitle());
}

/*******************************************************
 * Utilitários: respostas, CPF, pastas, etc.
 *******************************************************/

/**
 * Constrói um mapa { "Pergunta": "Resposta" } com respostas textuais.
 * Para campos de upload, salva apenas uma nota (sem os arquivos).
 */
function buildAnswersMap(itemResponses) {
    const map = {};
    itemResponses.forEach(ir => {
        const title = (ir.getItem().getTitle() || "").trim();
        const response = ir.getResponse();

        // Uploads vêm como IDs/URLs internamente, mas getResponse() às vezes retorna array.
        // Para clareza no documento-resumo, indicamos que há arquivo anexado.
        if (Array.isArray(response)) {
            // Campos de upload geralmente retornam array de URLs
            map[title] = "Arquivos enviados (ver pasta do CPF).";
        } else {
            map[title] = (response === null || response === undefined) ? "" : String(response);
        }
    });
    return map;
}

/**
 * Extrai o CPF a partir do mapa de respostas. 
 * Aceita apenas dígitos e exige 11 números.
 */
function extractCpf(answersMap, cpfFieldTitle) {
    const raw = answersMap[cpfFieldTitle];
    if (!raw) return null;
    const digits = String(raw).replace(/\D/g, "");
    if (digits.length === 11) return digits;
    return null;
}

/**
 * Resolve a pasta raiz dos uploads do Forms.
 * Estratégia:
 *  - Se houver arquivos enviados nesta resposta: pega parent (pasta pergunta) e sobe 1 nível (pasta raiz).
 *  - Senão, usa RESPONSES_ROOT_FOLDER_ID (se configurado).
 *  - (Opcional) fallback por nome de pasta (evitar se possível).
 */
function resolveRootUploadsFolder(e, formTitle) {
    // Tenta achar por algum upload desta resposta
    const fileUploadResponses = e.response.getItemResponses()
        .map(ir => ir.getItem())
        .filter(item => item.getType && item.getType() === FormApp.ItemType.FILE_UPLOAD);

    // Precisamos pegar os arquivos via e.response.getItemResponses()[i].getResponse()?
    // A API do Forms fornece os arquivos com IDs via e.response.getItemResponses()[i].getResponse() (URLs).
    // A forma mais confiável no GAS é usar FormResponse.getItemResponses() e depois getFiles() do FileUploadResponse.
    const uploads = getAllUploadedFilesFromResponse(e.response);

    if (uploads.length > 0) {
        // Pega a pasta da pergunta e sobe 1 nível
        const firstFile = uploads[0];
        const parents = firstFile.getParents();
        if (parents.hasNext()) {
            const questionFolder = parents.next(); // pasta específica da pergunta
            const rootParents = questionFolder.getParents();
            if (rootParents.hasNext()) {
                return rootParents.next(); // pasta raiz (File responses)
            } else {
                // Algumas instâncias podem não ter pai acima — retorna a própria pasta da pergunta
                return questionFolder;
            }
        }
    }

    // Se não houve uploads nesta resposta, usa constante (se houver)
    if (RESPONSES_ROOT_FOLDER_ID) {
        try {
            return DriveApp.getFolderById(RESPONSES_ROOT_FOLDER_ID);
        } catch (e) {
            console.warn("RESPONSES_ROOT_FOLDER_ID inválido:", e);
        }
    }

    // Fallback por nome (menos robusto por causa do idioma): "Form Title (File responses)"
    // Tente evitar esse caminho. Mantenho aqui como plano C.
    const possibleNames = [
        formTitle + " (File responses)",          // EN
        formTitle + " (Respostas de arquivos)",   // PT-BR comum
        formTitle + " (Respostas com arquivos)"   // variação
    ];
    const it = DriveApp.getFolders();
    while (it.hasNext()) {
        const f = it.next();
        if (possibleNames.includes(f.getName())) return f;
    }

    return null;
}

/**
 * Coleta todos os arquivos enviados (File objects) desta resposta.
 * Suporta resposta como ID direto ou URL.
 */
function getAllUploadedFilesFromResponse(formResponse) {
    const files = [];
    const itemResponses = formResponse.getItemResponses();
    itemResponses.forEach(ir => {
        const item = ir.getItem();
        if (item.getType && item.getType() === FormApp.ItemType.FILE_UPLOAD) {
            const values = ir.getResponse(); // array de IDs OU URLs
            if (Array.isArray(values)) {
                values.forEach(v => {
                    const fileId = getFileIdFromValue(v);
                    if (fileId) {
                        try {
                            const file = DriveApp.getFileById(fileId);
                            files.push(file);
                        } catch (e) {
                            console.warn("Não foi possível abrir o arquivo por ID:", fileId, e);
                        }
                    }
                });
            }
        }
    });
    return files;
}

/**
 * Extrai File ID de URLs do Drive (padrões comuns).
 */
function extractFileIdFromUrl(url) {
    if (!url) return null;
    // Exemplos:
    // https://drive.google.com/open?id=FILE_ID
    // https://drive.google.com/file/d/FILE_ID/view?usp=drive_web
    let m = String(url).match(/\/d\/([^/]+)/);
    if (m && m[1]) return m[1];
    m = String(url).match(/[?&]id=([^&]+)/);
    if (m && m[1]) return m[1];
    return null;
}

/**
 * Retorna o ID do arquivo a partir de um valor de resposta do Forms,
 * que pode ser um ID puro (ex.: "1AbC...") ou uma URL do Drive.
 */
function getFileIdFromValue(val) {
    if (!val) return null;
    const s = String(val).trim();

    // Heurística simples: se parece um ID (sem "http"), usa direto.
    if (!/^https?:\/\//i.test(s)) {
        return s; // ID puro
    }
    // Caso seja URL, tenta extrair o ID
    return extractFileIdFromUrl(s);
}

/**
 * Garante a existência da pasta do CPF dentro da pasta raiz dos uploads.
 */
function ensureCpfFolder(rootFolder, cpf) {
    const targetName = cpf;
    const subFolders = rootFolder.getFoldersByName(targetName);
    if (subFolders.hasNext()) {
        return subFolders.next();
    }
    return rootFolder.createFolder(targetName);
}

/*******************************************************
 * Documentos (resumo e procuração)
 *******************************************************/

/**
 * Cria um Google Docs com todas as perguntas e respostas (sem anexos).
 */
function createSummaryDoc(cpfFolder, formTitle, answersMap, cpf) {
    const docName = `${RESUMO_DOC_PREFIX}${cpf}`;
    const doc = DocumentApp.create(docName);
    const body = doc.getBody();

    body.appendParagraph(formTitle).setHeading(DocumentApp.ParagraphHeading.HEADING1);
    body.appendParagraph(`CPF: ${cpf}`).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph("Respostas do Formulário").setHeading(DocumentApp.ParagraphHeading.HEADING3);
    body.appendParagraph("");

    Object.keys(answersMap).forEach(question => {
        body.appendParagraph(question).setHeading(DocumentApp.ParagraphHeading.HEADING4);
        body.appendParagraph(String(answersMap[question] || "")).setSpacingAfter(10);
    });

    doc.saveAndClose();

    // Mover o Doc recém-criado para a pasta do CPF
    const file = DriveApp.getFileById(doc.getId());
    cpfFolder.addFile(file);
    // Remove da pasta raiz "Meu Drive" para não duplicar
    const parents = file.getParents();
    while (parents.hasNext()) {
        const p = parents.next();
        if (p.getId() !== cpfFolder.getId()) {
            p.removeFile(file);
        }
    }
    return doc;
}

/**
 * Procura o template de procuração pelo nome dentro da pasta informada.
 */
function findTemplateInFolder(folder, templateName) {
    const files = folder.getFilesByName(templateName);
    if (files.hasNext()) return files.next();
    return null;
}

/**
 * Gera um Google Docs "PROCURAÇÃO - CPF" a partir do MODELO_PROCURAÇÃO,
 * substituindo {{TAGS}} com as respostas do formulário.
 */
function generateProcDocFromTemplate(templateFile, cpfFolder, cpf, answersMap) {
    const copy = templateFile.makeCopy(`${PROC_DOC_PREFIX}${cpf}`, cpfFolder);
    const doc = DocumentApp.openById(copy.getId());
    const body = doc.getBody();

    // Monta mapa de substituição de tags
    // Ex.: {{NOME}}, {{CPF}}, {{ENDERECO}}, etc.
    const tagMap = buildTagMap(answersMap);

    // Garante tag CPF
    tagMap["CPF"] = cpf;

    // Faz as substituições
    replaceTagsInBody(body, tagMap);

    doc.saveAndClose();
    return doc;
}

/**
 * Constrói o mapa de tags a partir dos títulos da planilha do Forms.
 * - Mapeia cada pergunta para uma TAG canônica (ex.: "Nome completo" -> NOME_COMPLETO)
 * - Cria aliases úteis (ex.: NOME_COMPLETO -> NOME)
 * - Gera CPF_NUMEROS com apenas dígitos
 */
function buildTagMap(answersMap) {
    const map = {};

    // Mapeamento EXATO de título -> TAG canônica
    const titleToTag = {
        "Nome completo": "NOME_COMPLETO",
        "CPF": "CPF",
        "Data de nascimento": "DATA_NASCIMENTO",
        "Telefone/Whatsapp": "TELEFONE_WHATSAPP",
        "E-mail": "EMAIL",
        "Estado Civil": "ESTADO_CIVIL",
        "Qual a sua nacionalidade?": "NACIONALIDADE",
        "Aviso de Responsabilidade": "ACEITE_RESPONSABILIDADE",

        // Endereço
        "CEP": "CEP",
        "Rua / Logradouro": "ENDERECO_RUA",
        "Número": "ENDERECO_NUMERO",
        "Bairro": "ENDERECO_BAIRRO",
        "Cidade": "ENDERECO_CIDADE",
        "UF": "ENDERECO_UF",

        // Documentos pessoais
        "RG Digitalizado": "RG_DIGITALIZADO",
        "CPF Digitalizado": "CPF_DIGITALIZADO",
        "Comprovante de Residência": "COMPROVANTE_RESIDENCIA",
        "Certidão de Nascimento ou Casamento": "CERTIDAO_NASCIMENTO_OU_CASAMENTO",

        // Escolha de benefício
        "Qual benefício você está solicitando?": "TIPO_BENEFICIO",

        // Aposentadoria
        "CNIS": "CNIS",
        "Carteiras de Trabalho (CTPS)": "CARTEIRAS_TRABALHO",
        "Comprovantes de Contribuição Individual (se houver)": "COMPROVANTES_CONTRIBUICAO_INDIVIDUAL",
        "Laudos Médicos / PPP (Perfil Profissiográfico Previdenciário)": "LAUDOS_MEDICOS_OU_PPP",
        "Decisões de Benefícios Anteriores (se houver)": "DECISOES_BENEFICIOS_ANTERIORES",
        "Você já entrou com pedido de aposentadoria anteriormente?": "PEDIDO_ANTERIOR",
        "Envio da Decisão/Indeferimento": "DECISAO_OU_INDEFERIMENTO",

        // Campo livre
        "Campo de Observações (opcional)": "OBSERVACOES",

        // BPC/LOAS
        "Laudos Médicos (se for BPC por deficiência)": "LAUDOS_MEDICOS_BPC",
        "Comprovantes de Renda da Família": "COMPROVANTES_RENDA_FAMILIA",
        "Quantidade de Pessoas na Residência": "QTD_PESSOAS_RESIDENCIA",
        "Renda Mensal Aproximada da Família": "RENDA_MENSAL_APROXIMADA_FAMILIA",
        "Declaração de Não Recebimento de Benefício (se houver modelo pronto)": "DECLARACAO_NAO_RECEBIMENTO_BENEFICIO",
        "Carimbo de data/hora": "DATA_ENVIO"
    };

    // Aliases opcionais (espelham valores em chaves alternativas)
    const aliases = {
        "NOME_COMPLETO": "NOME",
        "EMAIL": "E_MAIL",
        "ENDERECO_RUA": "ENDERECO", // às vezes o modelo usa {{ENDERECO}} para a rua
        "ENDERECO_UF": "UF",        // por compatibilidade com modelos antigos
        "TELEFONE_WHATSAPP": "TELEFONE_CONTATO",
        "NACIONALIDADE": "NACIONALIDADE_REQUERENTE",
        "OBSERVACOES": "OBSERVACOES_CLIENTE",
        "QTD_PESSOAS_RESIDENCIA": "QUANTIDADE_PESSOAS_RESIDENCIA",
        "RENDA_MENSAL_APROXIMADA_FAMILIA": "RENDA_MENSAL_FAMILIA"
    };

    // Preenche TAGs canônicas (ou normaliza se não achar título exato)
    Object.keys(answersMap).forEach(question => {
        const value = answersMap[question] ?? "";
        const canonical = titleToTag[question] || normalizeToTagKey(question);
        map[canonical] = value;

        // Preenche alias (se existir)
        if (aliases[canonical]) {
            map[aliases[canonical]] = value;
        }
    });

    // Gera CPF_NUMEROS (apenas dígitos), útil para documentos que exigem CPF sem pontuação
    if (map["CPF"]) {
        map["CPF_NUMEROS"] = String(map["CPF"]).replace(/\D/g, "");
    }

    return map;
}
/**
 * Normaliza um texto para CHAVE DE TAG (sem acentos, maiúsculas e underscore).
 */
function normalizeToTagKey(text) {
    const noAccents = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return noAccents
        .replace(/\s+/g, '_')
        .replace(/[^\w]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '')
        .toUpperCase();
}

/**
 * Substitui {{CHAVES}} no corpo do documento.
 */
function replaceTagsInBody(body, tagMap) {
    // Substitui todas as chaves do tipo {{KEY}}
    Object.keys(tagMap).forEach(key => {
        const val = String(tagMap[key] || "");
        body.replaceText(`\\{\\{${key}\\}\\}`, escapeForDocs(val));
    });
}

/**
 * Escapa backslashes para evitar interpretações erradas no replaceText (regex).
 */
function escapeForDocs(text) {
    return text.replace(/\\/g, "\\\\");
}

/*******************************************************
 * Uploads: renomear e mover
 *******************************************************/

/**
 * Renomeia e move arquivos de upload:
 *  - Nome final: "<TITULO_DA_PERGUNTA> - <CPF><.ext>"
 *  - Move para a pasta do CPF (file.moveTo)
 *  - Suporta respostas com ID direto OU URL
 */
function processFileUploads(e, cpf, cpfFolder) {
    const itemResponses = e.response.getItemResponses();

    itemResponses.forEach(ir => {
        const item = ir.getItem();
        if (item.getType && item.getType() === FormApp.ItemType.FILE_UPLOAD) {
            const title = (item.getTitle() || "Arquivo").trim();
            const values = ir.getResponse(); // geralmente array de IDs ou URLs

            if (Array.isArray(values)) {
                values.forEach(v => {
                    const fileId = getFileIdFromValue(v); // <-- novo helper
                    if (!fileId) return;

                    const file = DriveApp.getFileById(fileId);
                    const ext = getFileExtension(file.getName());
                    const safeTitle = sanitizeFilename(title);
                    const newName = ext ? `${safeTitle} - ${cpf}.${ext}` : `${safeTitle} - ${cpf}`;

                    file.setName(newName);

                    // Move de uma vez (mais seguro que add/remove)
                    file.moveTo(cpfFolder);
                });
            }
        }
    });
}

/**
 * Extrai a extensão do arquivo a partir do nome (ex.: "RG.jpg" -> "jpg").
 */
function getFileExtension(filename) {
    const m = String(filename).match(/\.([^.]+)$/);
    return m ? m[1] : "";
}

/**
 * Limpa o nome para ser um nome de arquivo seguro.
 */
function sanitizeFilename(name) {
    return String(name)
        .replace(/[\\\/:*?"<>|]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}