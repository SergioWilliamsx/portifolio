import styles from "./styles.module.css";

type Props = {
  name: string;
  color: string;
  width: number;
  height: number;
  size: number;
  weight: number;
  family: string;
  bg: string;
  href: string;
};

export function Button({ name, color, width, height, size, weight, family, bg, href}: Props) {
  return (
    <a
    href={href}
      className={styles.btn}
      style={{
        color,
        width,
        height,
        fontSize: size,
        fontWeight: weight,
        fontFamily: family,
        backgroundColor: bg
      }}
    >
      {name}
    </a>
  );
}
