import Image from "next/image";
import Link from "next/link";
import styles from "@/assets/styles/AboutAuthor.module.scss";
import profileImg from "@/assets/images/profile.png";

const AboutAuthor = () => {
  return (
    <section className={styles.aboutAuthor}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={profileImg}
            alt="Dra. Maria Clara Santos"
            width={140}
            height={140}
          />
        </div>
        <div className={styles.info}>
          <span className={styles.specialty}>Sua Especialista</span>
          <h3>Dra. Maria Clara Santos</h3>
          <p>
            Advogada dedicada a proteger o direito de quem mais precisa. Com
            atuação especializada em Recife e Região Metropolitana, foco meu
            trabalho na humanização do atendimento jurídico e no combate às
            injustiças do INSS.
          </p>
          <Link href="/#sobre" className={styles.link}>
            CONHECER MINHA HISTÓRIA COMPLETA{" "}
            <i
              className="pi pi-arrow-right"
              style={{ fontSize: "0.8rem", marginLeft: "5px" }}
            ></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
