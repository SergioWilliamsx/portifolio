import styles from "./styles.module.css"

interface CardSelectionSkillsProps {
    title: string
    selected?: boolean
    onClick?: () => void
}

export function CardSelectionSkills({ title, selected, onClick }: CardSelectionSkillsProps) {
    return (
        <button className={`${styles.CardSelectionSkills} ${selected ? styles.selected : ""}`} onClick={onClick}>
            {title}
        </button>
    )
}