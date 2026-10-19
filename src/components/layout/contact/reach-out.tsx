import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./styles/styles.module.css";

type ReachOutProps = {
  onCopyEmail: () => void;
  labels: {
    reachOutTitle: string;
    reachOutDescription: string[];
    emailTitle: string;
    copyEmail: string;
    githubTitle: string;
    linkedinTitle: string;
  };
};

export function ReachOut({ onCopyEmail, labels }: ReachOutProps) {
  return (
    <section className={styles.reachOut}>
      <header className={styles.reachOutHeader}>
        <h1 className={styles.reachOutTitle}>{labels.reachOutTitle}</h1>
        <p className={styles.reachOutDescription}>
          {labels.reachOutDescription[0]}
          <br />
          {labels.reachOutDescription[1]}
          <br />
          {labels.reachOutDescription[2]}
        </p>
      </header>
      <div className={styles.reachOutEmailCard}>
        <div className={styles.emailHeader}>
          <div className={styles.emailContent}>
            <MdEmail size={25} />
            <h2>{labels.emailTitle}</h2>
          </div>
          <button
            className={styles.emailCopyButton}
            type="button"
            onClick={onCopyEmail}
          >
            {labels.copyEmail}
          </button>
        </div>
        <p className={styles.email}>wsergio164@gmail.com</p>
      </div>
      <div className={styles.reachOutCard}>
        <div className={styles.CardROHeader}>
          <div className={styles.content}>
            <FaGithub size={25} />
            <h2>{labels.githubTitle}</h2>
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
            <h2>{labels.linkedinTitle}</h2>
          </div>
          <a href="https://www.linkedin.com/in/sergio-williams-a64a922b7" className={styles.email} target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/sergio-williams-a64a922b7
          </a>
        </div>
      </div>
      <footer className={styles.contactFooter}>
        <a href="https://github.com/SergioWilliamsx" className={styles.footerCard} target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.contactIcon} size={25} />
        </a>
        <a href="https://www.linkedin.com/in/sergio-williams-a64a922b7" className={styles.footerCard} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.linkedinIcon} size={25} />
        </a>
        <a onClick={onCopyEmail} className={styles.footerCard}>
          <MdEmail size={25} />
        </a>
      </footer>
    </section>
  );
}
