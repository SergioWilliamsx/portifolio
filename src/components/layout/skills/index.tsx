import styles from "./styles.module.css"
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

export function Skils() {
    const skills = ["NodeJS", "SQL", "Python", "React", "Flutter"]
    const [selectedSkill, setSelectedSkill] = useState(skills[0])

    return (
        <article id="Skills" className={styles.skilsContainer}>
            <h1 className={styles.skillsTitle}>Skills</h1>
            <section className={styles.selectiionSkils}>
                <div className={styles.desktopSkills}>
                    {skills.map((skill) => (
                        <CardSelectionSkills
                            key={skill}
                            title={skill}
                            selected={skill === selectedSkill}
                            onClick={() => setSelectedSkill(skill)}
                        />
                    ))}
                </div>
                <div className={styles.mobileSkills}>
                    <SkillsDropdown
                        items={skills}
                        value={selectedSkill}
                        onValueChange={setSelectedSkill}
                    />
                </div>
            </section>
            <div className={styles.container}>
                <FocusBar title="optimization"/>
                <article className={styles.cardsContainer}>
                    <Card title="Full-Stack development" description="lorem ipsum" icon={<FaDatabase size={41} color="#6F7A91"/>}/>
                    <Card title="Optimization" description="lorem ipsum" icon={<SiVelocity size={41} color="#6F7A91"/>}/>
                    <Card title="Security" description="lorem ipsum" icon={<MdOutlineSecurity size={41} color="#6F7A91"/>}/>
                    <Card title="Scalable Architecture" description="lorem ipsum" icon={<IoLayersOutline size={41} color="#6F7A91"/>}/>
                </article>
            </div>
        </article>
    )
}