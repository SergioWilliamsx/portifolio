import styles from "./styles.module.css";
import "../../../global.css"
import {Button} from "../../ui/button/index.tsx"
import { dict, type Lang } from "../../../i18n/index.ts"

export function Hero({ lang }: { lang: Lang }) {
    const labels = dict[lang].hero;
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.title}>Sérgio Williams</h1>
            <h2 className={styles.subtitle}>{labels[0]}</h2>
            <h3 className={styles.tech}>Node.js •React•MongoDB•Express•NextJS•VueJS</h3>
            <h2 className={styles.wib}>{labels[1]}</h2>
            <div className={styles.btnDisplay}>
                <Button name={labels[2]} color="#161C25" width={203} height={67} size={16} weight={700} family="Playfair Display" bg="#FBFBFD"/>
                <Button name={labels[3]} color="#161C25" width={149} height={67} size={16} weight={700} family="Playfair Display" bg="#D5D9E4"/>
            </div>
        </div>
    )
}