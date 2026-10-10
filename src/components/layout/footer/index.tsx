import styles from "./styles.module.css";
import "../../../global.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>Sérgio Williams</h1>
      <div className={styles.iconsContainer}>
        <a href="https://github.com/SergioWilliamsx" target="_blank" rel="noopener noreferrer" className={styles.iconLink}><FaGithub color={"#ffffff"} size={34}/></a>
        <a href="https://www.linkedin.com/in/sergio-williams-a64a922b7" target="_blank" rel="noopener noreferrer" className={styles.iconLink}><FaLinkedin color={"#ffffff"} size={34}/></a>
        <a href="#Contact" className={styles.iconLink}><MdEmail color={"#ffffff"} size={34}/></a>
      </div>
      <p className={styles.copyright}>© 2026 Sérgio Williams</p>
    </footer>
  );
}