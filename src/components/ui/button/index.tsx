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
};

export function Button({ name, color, width, height, size, weight, family, bg}: Props) {
  return (
    <button
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
    </button>
  );
}
