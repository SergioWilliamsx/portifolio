import type { FormEvent, RefObject } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./styles.module.css";

type ContactFormProps = {
  formRef: RefObject<HTMLFormElement | null>;
  isSending: boolean;
  formMessage: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ContactForm({
  formRef,
  isSending,
  formMessage,
  onSubmit,
}: ContactFormProps) {
  return (
    <section className={styles.contatMe}>
      <header className={styles.contactHeader}>
        <h1>Contact</h1>
        <p>
          Let’s work together,
          <br />
          get in touch with me.
        </p>
      </header>
      <form ref={formRef} className={styles.contactForm} onSubmit={onSubmit}>
        <div className={styles.contactInputContainer}>
          <FaUser size={25} />
          <input
            className={styles.contactInput}
            type="text"
            name="name"
            placeholder="Nome"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.emailInputContainer}>
            <label>
              <MdEmail size={25} />
            </label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" required />
        </div>
        <button className={styles.contactButton} type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send message"}
        </button>
        {formMessage && <p role="status">{formMessage}</p>}
      </form>
    </section>
  );
}
