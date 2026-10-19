import styles from "./styles/styles.module.css";
import "../../../global.css"
import { dict, type Lang } from "../../../i18n/index.ts"
import {LanguageSelector} from '../../ui/languageSelector/index.tsx'
import { ThemeButton } from './components/theme_button/index.tsx'
import { useState } from "react";

export function Navbar({ lang, onLanguageChange }: { lang: Lang; onLanguageChange: (lang: Lang) => void }) {
    const labels = dict[lang].nav;
    const ids = dict["en"].nav
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.container}>
            <span className={styles.logo} role="img" aria-label="Sérgio Williams" />
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
                <LanguageSelector value={lang} onChange={onLanguageChange} />
                <ThemeButton />
            </ul>
        </div>
    )
}