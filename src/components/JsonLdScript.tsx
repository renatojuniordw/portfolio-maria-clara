interface JsonLdScriptProps {
  data: object;
}

const JsonLdScript = ({ data }: JsonLdScriptProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLdScript;
