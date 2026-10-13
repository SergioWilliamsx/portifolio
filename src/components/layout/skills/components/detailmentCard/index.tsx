import styles from './styles.module.css';
import type { ReactNode } from 'react';

interface CardProps {
    title: string,
    description: string,
    icon: ReactNode
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