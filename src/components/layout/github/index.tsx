import styles from "./styles.module.css";
import "../../../global.css"
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { type Lang } from "../../../i18n/index.ts";

type GithubApiUser = {
  login: string;
  avatar_url: string;
  name: string | null;
  html_url: string;
  location: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
};

type User = {
  user: string;
  avatar_url: string;
  user_name: string;
  link: string;
  local: string;
  repositories: number;
  followers: number;
  following: number;
  desc: string;
};

async function getProfile(username: string): Promise<User> {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = (await res.json()) as GithubApiUser;

  return {
    user: data.login,
    avatar_url: data.avatar_url,
    user_name: data.name ?? data.login,
    link: data.html_url,
    local: data.location ?? "",
    repositories: data.public_repos,
    followers: data.followers,
    following: data.following,
    desc: data.bio ?? "",
  };
}

export function Github({ lang: _lang }: { lang: Lang }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const username = "SergioWilliamsx"; // ou vindo de input

    (async () => {
      setLoading(true);
      setError("");

      try {
        const profile = await getProfile(username);
        setUser(profile);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section id="GitHub" className={styles.container}>
      <h1>GitHub</h1>

      {loading && <p>loading</p>}
      {error && <p>{error}</p>}

      {user && (
        <article className={styles.card}>
          <header className={styles.header}>
            <img
              className={styles.avatar}
              src={user.avatar_url}
              alt={user.user}
            />
            <section className={styles.cardMain}>
              <strong>{user.user_name}</strong>
              <div>@{user.user}</div>
              <p>{user.desc}</p>
            </section>
            <a
              className={styles.link}
              href={user.link}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={15} />
              github.com/sergiowilliamsx
            </a>
          </header>
          <div className={styles.loc}>
            <div>
              <FaLocationDot size={15} />
              {user.local}
            </div>
            <a href={user.link} target="_blank" rel="noreferrer">
              <FaGithub size={15} />
              github.com/sergiowilliamsx
            </a>
          </div>
          <section className={styles.stats}>
            <article className={styles.statscard}>
              <h1>Repositories {user.repositories}</h1>
              <a href={user.link} target="_blank" rel="noreferrer">
                <FaGithub size={32} color="#4B4856" />
              </a>
            </article>
            <article className={styles.statscard}>
              <h1>Followers</h1>
              <p>{user.followers}</p>
            </article>
            <article className={styles.statscard}>
              <h1>Following</h1>
              <p>{user.following}</p>
            </article>
          </section>
        </article>
      )}
    </section>
  );
}