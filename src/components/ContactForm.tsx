

import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import styles from '@/assets/styles/ContactForm.module.scss';
import { ContactFormData } from '@/types/form.types';

const ContactForm = () => {
    const toast = useRef<Toast>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit = (data: ContactFormData) => {
        console.log(data);
        toast.current?.show({ severity: 'success', summary: 'Mensagem enviada', detail: 'Entraremos em contato em breve.' });
        reset();
    };

    return (
        <section className={styles.contact} id="contato">
            <Toast ref={toast} />
            <h2 className={styles.title}>Fale com a Doutora</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="nome">Nome</label>
                    <InputText id="nome" {...register('nome', { required: true })} className={errors.nome ? 'p-invalid' : ''} />
                </div>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <InputText id="email" {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} className={errors.email ? 'p-invalid' : ''} />
                </div>
                <div className={styles.field}>
                    <label htmlFor="telefone">Telefone</label>
                    <InputText id="telefone" {...register('telefone', { required: true })} className={errors.telefone ? 'p-invalid' : ''} />
                </div>
                <div className={styles.field}>
                    <label htmlFor="mensagem">Mensagem</label>
                    <InputTextarea id="mensagem" rows={5} {...register('mensagem', { required: true })} className={errors.mensagem ? 'p-invalid' : ''} />
                </div>
                <Button type="submit" label="Enviar" className="p-button-rounded p-mt-2" />
            </form>
        </section>
    );
};

export default ContactForm;
