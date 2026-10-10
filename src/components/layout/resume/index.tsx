import styles from "./styles.module.css"
import "../../../global.css"
import { IoSchoolSharp } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";

export function Resume() {
    return (
        <section id="Resume" className={styles.resumeSection}>
            <header className={styles.resumeHeader}>
                <div className={styles.headerText}>
                    <h1>Resume</h1>
                    <p>Download my resume as a pdf</p>
                </div>
                <a
                    href="/portifolio/documents/resume.pdf"
                    download
                    >
                    <HiOutlineDownload size={20} />
                    Download pdf
                </a>
            </header>

            <section className={styles.resumeContainer}>
                <article className={styles.resumeCard}>
                    <header className={styles.resumeCardHeader}>
                        <IoSchoolSharp size={45}/>
                        <h3>Education</h3>
                    </header>
                    <article className={styles.resumeCardContent}>
                        <header>
                            <h4>Sate University of Paraíba</h4>
                            <h4>2026 - present</h4>
                        </header>
                        <p>Bachelor of Science in Computer Science</p>
                    </article>
                </article>
            </section>

            <a href="#Contact">Contact me</a>
        </section>
    )
}