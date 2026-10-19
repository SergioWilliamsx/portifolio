import styles from "./styles/styles.module.css"
import "../../../global.css"
import {CardSelectionSkills} from './components/skilsCardComponent/index'
import {FocusBar} from "./components/focusBar/index";
import {Card} from './components/detailmentCard/index'
import { useState } from "react"
import { SkillsDropdown } from "../../ui/dropdownMenu"

import { FaDatabase } from "react-icons/fa";
import { SiVelocity } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { IoLayersOutline } from "react-icons/io5";
import { dict, type Lang } from "../../../i18n/index.ts"

export function Skils({lang}: {lang: Lang}) {
    const skills = [
        { key: "Nodejs", label: "NodeJS" },
        { key: "sql", label: "SQL" },
        { key: "python", label: "Python" },
        { key: "React", label: "React" },
        { key: "Flutter", label: "Flutter" },
    ] as const
    const [selectedSkill, setSelectedSkill] = useState<(typeof skills)[number]["key"]>(skills[0].key)
    const labels = dict[lang].skills
    const selectedLabels = labels[selectedSkill]
    const cardDetails = [
        { title: selectedLabels[0], description: selectedLabels[1], icon: <FaDatabase className={styles.skillIcon} size={41}/> },
        { title: selectedLabels[2], description: selectedLabels[3], icon: <SiVelocity className={styles.skillIcon} size={41}/> },
        { title: selectedLabels[4], description: selectedLabels[5], icon: <MdOutlineSecurity className={styles.skillIcon} size={41}/> },
        { title: selectedLabels[6], description: selectedLabels[7], icon: <IoLayersOutline className={styles.skillIcon} size={41}/> },
    ]

    return (
        <article id="Skills" className={styles.skilsContainer}>
            <h1 className={styles.skillsTitle}>{labels.pattern[0]}</h1>
            <section className={styles.selectiionSkils}>
                <div className={styles.desktopSkills}>
                    {skills.map((skill) => (
                        <CardSelectionSkills
                            key={skill.key}
                            title={skill.label}
                            selected={skill.key === selectedSkill}
                            onClick={() => setSelectedSkill(skill.key)}
                        />
                    ))}
                </div>
                <div className={styles.mobileSkills}>
                    <SkillsDropdown
                        items={skills.map((skill) => skill.label)}
                        value={skills.find((skill) => skill.key === selectedSkill)?.label ?? skills[0].label}
                        onValueChange={(label) => {
                            const skill = skills.find((item) => item.label === label)
                            if (skill) setSelectedSkill(skill.key)
                        }}
                    />
                </div>
            </section>
            <div className={styles.container}>
                <FocusBar label={labels.pattern[1]} title={selectedLabels[0]}/>
                <article className={styles.cardsContainer}>
                    {cardDetails.map((card) => (
                        <Card key={card.title} {...card}/>
                    ))}
                </article>
            </div>
        </article>
    )
}