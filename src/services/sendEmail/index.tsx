import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendEmail(form: HTMLFormElement): Promise<void> {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("As credenciais do EmailJS não foram configuradas.");
  }

  await emailjs.sendForm(serviceId, templateId, form, {
    publicKey,
  });
}
