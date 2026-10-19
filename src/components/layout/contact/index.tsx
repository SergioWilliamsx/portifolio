import "../../../global.css";
import styles from "./styles/styles.module.css";
import { useRef, useState } from "react";
import { sendEmail } from "../../../services/sendEmail";
import { ContactAlerts } from "./contact-alerts";
import { ContactForm } from "./contact-form";
import { ReachOut } from "./reach-out";
import type { AlertPayload, AlertMessage } from "./types";
import { dict, type Lang } from "../../../i18n";

export function Contact({ lang }: { lang: Lang }) {
  const labels = dict[lang].contact;
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [alertMessages, setAlertMessages] = useState<AlertMessage[]>([]);

  const showAlert = (message: AlertPayload) => {
    const id = Date.now();
    setAlertMessages((currentAlerts) => [
      ...currentAlerts,
      { ...message, id, isExiting: false },
    ]);
    window.setTimeout(() => {
      setAlertMessages((currentAlerts) =>
        currentAlerts.map((alertMessage) =>
          alertMessage.id === id
            ? { ...alertMessage, isExiting: true }
            : alertMessage,
        ),
      );
    }, 4500);
    window.setTimeout(() => {
      setAlertMessages((currentAlerts) =>
        currentAlerts.filter((alertMessage) => alertMessage.id !== id),
      );
    }, 5000);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    setIsSending(true);
    setFormMessage("");

    try {
      await sendEmail(formRef.current);
      formRef.current.reset();
      showAlert({
        title: labels.alerts.sentTitle,
        description: labels.alerts.sentDescription,
      });
    } catch (error) {
      console.error("Falha ao enviar mensagem:", error);
      showAlert({
        title: labels.alerts.sendErrorTitle,
        description: labels.alerts.sendErrorDescription,
      });
    } finally {
      setIsSending(false);
    }
  };

  const copyEmail = async () => {
    const email = "wsergio164@gmail.com";

    if (!navigator.clipboard) {
      window.alert(labels.alerts.clipboardError);
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      showAlert({
        title: labels.alerts.copiedTitle,
        description: email,
      });
    } catch {
      window.alert(labels.alerts.clipboardError);
    }
  };

  return (
    <section id="Contact" className={styles.contactContainer}>
      <ContactAlerts messages={alertMessages} />
      <ContactForm
        formRef={formRef}
        isSending={isSending}
        formMessage={formMessage}
        onSubmit={handleSubmit}
        labels={labels}
      />
      <ReachOut onCopyEmail={copyEmail} labels={labels} />
    </section>
  );
}
