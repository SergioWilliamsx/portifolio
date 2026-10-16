import styles from "./styles.module.css"
import "../../../global.css"
import { IoSchoolSharp } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import { dict, type Lang } from "../../../i18n/index.ts"

export function Resume({lang}: {lang: Lang}) {
    const labels = dict[lang].resume;
    return (
        <section id="Resume" className={styles.resumeSection}>
            <header className={styles.resumeHeader}>
                <div className={styles.headerText}>
                    <h1>{labels[0]}</h1>
                    <p>{labels[1]}</p>
                </div>
                <a
                    href={ lang == "en" ? "/portifolio/documents/resume.pdf" : "/portifolio/documents/resume ptbr.pdf"}
                    download
                    >
                    <HiOutlineDownload size={20} />
                    {labels[2]}
                </a>
            </header>

            <section className={styles.resumeContainer}>
                <article className={styles.resumeCard}>
                    <header className={styles.resumeCardHeader}>
                        <IoSchoolSharp size={45}/>
                        <h3>{labels[3]}</h3>
                    </header>
                    <article className={styles.resumeCardContent}>
                        <header>
                            <h4>{labels[4]}</h4>
                            <h4>{labels[5]}</h4>
                        </header>
                        <p>{labels[6]}</p>
                    </article>
                </article>
            </section>

            <a href="#Contact">{labels[7]}</a>
        </section>
    )
}