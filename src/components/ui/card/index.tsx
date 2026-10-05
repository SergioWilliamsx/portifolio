import styles from  "./styles.module.css"
import icon from "../../../../public/cs.png"
type Props = {
    imgUrl: string;
    title: string;
    desc: string;
    itens: string[];
    check: string[];
    demoUrl: string[];
    codeurl: string[];
    cs: string[];
}

export function Card({imgUrl, title, desc, itens, check, demoUrl, codeurl, cs} : Props) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={imgUrl} alt="imgcard" className={styles.imgCard} />
                <div className={styles.cardMain}>
                    <h1 className={styles.cardTitle}>
                        {title}
                    </h1>
                    <h2 className={styles.cardDesc}>
                        {desc}
                    </h2>
                    <ul className={styles.itensTech}>
                        {itens.map(text=>{
                            return <li>{text}</li>
                        })}
                    </ul>
                    <ul className={styles.checkTech}>
                        {check.map(text=>{
                            return <li>{text}</li>
                        })}
                    </ul>
                    <div className={styles.btnDisplay}>
                        <a className={styles.ld} href={demoUrl[0]}>{demoUrl[1]}</a>
                        <a className={styles.vc} href={codeurl[0]}>{codeurl[1]}</a>
                        <a className={styles.cs}href={cs[0]}><img className={styles.btnimg} src={icon} alt="cs" />{cs[1]}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}