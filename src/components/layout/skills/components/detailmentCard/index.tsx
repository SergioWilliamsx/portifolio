import styles from './styles.module.css';

interface CardProps {
    title: String,
    description: String,
    icon: () => void
}

export function Card({title, description, icon}: CardProps) {
    return <article className={styles.cardContainer}>
        <section className={styles.icon}>
            {icon}
        </section>
        <section className={styles.content}>
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
    </article>
}