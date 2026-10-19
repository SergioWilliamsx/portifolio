import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./styles/styles.module.css";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
	const savedTheme = localStorage.getItem("theme");
	return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
};

export function ThemeButton() {
	const [theme, setTheme] = useState<Theme>(getInitialTheme);
	const isDark = theme === "dark";

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<li className={styles.container}>
			<button
				className={styles.toggle}
				type="button"
				role="switch"
				aria-checked={isDark}
				aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
				onClick={() => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")}
			>
				<span className={styles.icon} aria-hidden="true">
					{isDark ? <Moon size={15} /> : <Sun size={15} />}
				</span>
				<span className={styles.label}>{isDark ? "Dark" : "Light"}</span>
			</button>
		</li>
	);
}
