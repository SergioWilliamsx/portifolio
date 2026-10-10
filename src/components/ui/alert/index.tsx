import { FaRegCheckCircle } from "react-icons/fa";
import styles from "./styles.module.css";

type AlertProps = {
    title: string;
    description: string;
    isExiting?: boolean;
};

export function Alert({ title, description, isExiting = false }: AlertProps) {
    return (
        <div
            className={`${styles.alert} ${isExiting ? styles.alertExiting : ""}`}
            role="status"
        >
            <FaRegCheckCircle className={styles.alertIcon} size={15} color="#fff"/>
            <div className={styles.alertContent}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}