import ptBR from "./pt-BR.json";
import en from "./en.json"

export const dict = { "pt-BR": ptBR, "en": en} as const;
export type Lang = keyof typeof dict;

export function t(lang: Lang, path: string) {
  const parts = path.split(".");
  let cur: any = dict[lang];

  for (const p of parts) cur = cur?.[p];
  return cur ?? path; // fallback: mostra a chave
}