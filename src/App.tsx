import { useEffect, useState } from "react";
import {Hero} from "./components/layout/hero/index";
import {Navbar} from "./components/layout/navbar/index"
import {Projects} from "./components/layout/projects/index"
import {Github} from "./components/layout/github/index"
import {SmoothScroll} from "./components/ui/smoothscrool/index"
import type { Lang } from "./i18n";
import {Footer} from './components/layout/footer/index'
import {Contact} from './components/layout/contact/index'
import {Resume} from './components/layout/resume/index'
import {Skils} from './components/layout/skills/index'

export function App() {
  const [lang, setLang] = useState<Lang>("pt-BR");
//ola
  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
        boxSizing: "border-box",
      }}
    >
      <Navbar lang={lang} onLanguageChange={setLang} />
      <Hero lang={lang}/>
      <Projects lang={lang} />
      <Skils lang={lang} />
      <Github lang={lang}/>
      <Resume lang={lang}/>
      <Contact lang={lang}/>
      <Footer />
      <SmoothScroll />
    </div>
  )
}