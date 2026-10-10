import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./styles.module.css";

type ReachOutProps = {
  onCopyEmail: () => void;
};

export function ReachOut({ onCopyEmail }: ReachOutProps) {
  return (
    <section className={styles.reachOut}>
      <header className={styles.reachOutHeader}>
        <h1 className={styles.reachOutTitle}>Reach out</h1>
        <p className={styles.reachOutDescription}>
          I’m oppen to job oppotunities,
          <br />
          collaborations, and networking.
          <br />
          Feel free to reach out anytime!
        </p>
      </header>
      <div className={styles.reachOutEmailCard}>
        <div className={styles.emailHeader}>
          <div className={styles.emailContent}>
            <MdEmail size={25} />
            <h2>Email</h2>
          </div>
          <button
            className={styles.emailCopyButton}
            type="button"
            onClick={onCopyEmail}
          >
            Copy email
          </button>
        </div>
        <p className={styles.email}>wsergio164@gmail.com</p>
      </div>
      <div className={styles.reachOutCard}>
        <div className={styles.CardROHeader}>
          <div className={styles.content}>
            <FaGithub size={25} />
            <h2>GitHub</h2>
          </div>
          <a href="https://github.com/SergioWilliamsx" className={styles.email} target="_blank" rel="noopener noreferrer">
            https://github.com/SergioWilliamsx
          </a>
        </div>
      </div>
      <div className={styles.reachOutCard}>
        <div className={styles.CardROHeader}>
          <div className={styles.content}>
            <FaLinkedin size={25} />
            <h2>Linkedin</h2>
          </div>
          <a href="https://www.linkedin.com/in/sergio-williams-a64a922b7" className={styles.email} target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/sergio-williams-a64a922b7
          </a>
        </div>
      </div>
      <footer className={styles.contactFooter}>
        <a href="https://github.com/SergioWilliamsx" className={styles.footerCard} target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} color="black" />
        </a>
        <a href="https://www.linkedin.com/in/sergio-williams-a64a922b7" className={styles.footerCard} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} color="#6080B8" />
        </a>
        <a onClick={onCopyEmail} className={styles.footerCard}>
          <MdEmail size={25} />
        </a>
      </footer>
    </section>
  );
}
