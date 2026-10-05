import styles from "./styles.module.css";
import logo from '../../../../public/logo.svg'
import { dict, type Lang } from "../../../i18n/index.ts"
import { useState } from "react";

export function Navbar({ lang }: { lang: Lang }) {
    const labels = dict[lang].nav;
    const ids = dict["en"].nav
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} />
            <button
                className={styles.menuButton}
                type="button"
                aria-label="Abrir menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>
            <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ""}`}>
                {labels.map((text: string,i: number) => (
                    <li key={ids[i]}>
                        <a href={`#${ids[i]}`} onClick={() => setIsMenuOpen(false)}>{text}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}