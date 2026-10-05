import styles from "./styles.module.css"
import "../../../global.css"
import { dict, type Lang } from "../../../i18n/index.ts"
import {Card} from "../../ui/card/index.tsx"
import pp from "../../../../public/pp.png"
export function Projects({ lang }: { lang: Lang }){
    const nav = dict[lang].nav;
    const p1 = dict[lang].gs;
    return (
    <div id={dict["en"].nav[0]} className={styles.container}>
        <h1 className={styles.h1}>{nav[0]}</h1>
        <Card imgUrl={pp} title={p1[0]} desc={p1[1]} itens={[p1[2],p1[3]]} check={[p1[4]]} demoUrl={[p1[6],p1[5]]} codeurl={[p1[8],p1[7]]} cs={[p1[10],p1[9]]}/>
    </div>
)
}