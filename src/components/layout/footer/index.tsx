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
        <a><FaGithub color={"#4B4856"} size={34}/></a>
        <a><FaLinkedin color={"#4B4856"} size={34}/></a>
        <a><MdEmail color={"#4B4856"} size={34}/></a>
      </div>
      <p className={styles.copyright}>© 2026 Sérgio Williams</p>
    </footer>
  );
}