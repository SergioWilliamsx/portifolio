import styles from "./styles.module.css";
import { Alert } from "../../ui/alert";
import type { AlertMessage } from "./types";

type ContactAlertsProps = {
  messages: AlertMessage[];
};

export function ContactAlerts({ messages }: ContactAlertsProps) {
  if (messages.length === 0) {
    return null;
  }

  return (
    <div className={styles.alertStack}>
      {messages.map((alertMessage) => (
        <Alert
          key={alertMessage.id}
          title={alertMessage.title}
          description={alertMessage.description}
          isExiting={alertMessage.isExiting}
        />
      ))}
    </div>
  );
}
