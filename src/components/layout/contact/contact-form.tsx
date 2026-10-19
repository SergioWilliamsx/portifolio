import type { FormEvent, RefObject } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./styles/styles.module.css";

type ContactLabels = {
  formTitle: string;
  formDescription: string[];
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  sendButton: string;
  sendingButton: string;
};

type ContactFormProps = {
  formRef: RefObject<HTMLFormElement | null>;
  isSending: boolean;
  formMessage: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  labels: ContactLabels;
};

export function ContactForm({
  formRef,
  isSending,
  formMessage,
  onSubmit,
  labels,
}: ContactFormProps) {
  return (
    <section className={styles.contatMe}>
      <header className={styles.contactHeader}>
        <h1>{labels.formTitle}</h1>
        <p>
          {labels.formDescription[0]}
          <br />
          {labels.formDescription[1]}
        </p>
      </header>
      <form ref={formRef} className={styles.contactForm} onSubmit={onSubmit}>
        <div className={styles.contactInputContainer}>
          <FaUser size={25} />
          <input
            className={styles.contactInput}
            type="text"
            name="name"
            placeholder={labels.namePlaceholder}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.emailInputContainer}>
            <label>
              <MdEmail size={25} />
            </label>
            <input type="email" name="email" placeholder={labels.emailPlaceholder} required />
          </div>
          <input type="text" name="subject" placeholder={labels.subjectPlaceholder} required />
          <textarea name="message" placeholder={labels.messagePlaceholder} required />
        </div>
        <button className={styles.contactButton} type="submit" disabled={isSending}>
          {isSending ? labels.sendingButton : labels.sendButton}
        </button>
        {formMessage && <p role="status">{formMessage}</p>}
      </form>
    </section>
  );
}
