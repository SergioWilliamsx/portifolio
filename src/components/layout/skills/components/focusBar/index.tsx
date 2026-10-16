import { FaCheck } from "react-icons/fa6";
import styles from './styles.module.css';

interface FocusBarCardProps {
    label: string
    title: string
};

export function FocusBar({label, title}: FocusBarCardProps) {
    return <nav className={styles.navContainer}>
        <div className={styles.icon}>
            <FaCheck size={15} color="#fff"/>
        </div>
        <h2>{label} • <span className={styles.focus}>{title}</span></h2>
    </nav>
}
