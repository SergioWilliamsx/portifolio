import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import type { Lang } from "../../../i18n";
import "../../../global.css"
import styles from "./styles.module.css";

type LanguageSelectorProps = {
  value: Lang;
  onChange: (lang: Lang) => void;
};

const languages: { value: Lang; label: string }[] = [
  { value: "pt-BR", label: "PT-BR" },
  { value: "en", label: "EN" },
];

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);
  const selectedLanguage = languages.find((language) => language.value === value) ?? languages[0];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const selectLanguage = (lang: Lang) => {
    onChange(lang);
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={selectorRef}>
      <button
        className={styles.trigger}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{selectedLanguage.label}</span>
      <IoIosArrowDown fontWeight="600" color="#1C2329" className={isOpen ? styles.arrowOpen : ""} aria-hidden="true" />
      </button>
      {isOpen && (
        <ul className={styles.menu} role="listbox" aria-label="Select language">
          {languages.map((language) => (
            <li key={language.value}>
              <button
                className={`${styles.item} ${language.value === value ? styles.selected : ""}`}
                type="button"
                role="option"
                aria-selected={language.value === value}
                onClick={() => selectLanguage(language.value)}
              >
                {language.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
