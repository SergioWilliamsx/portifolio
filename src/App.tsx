import {Hero} from "./components/layout/hero/index";
import {Navbar} from "./components/layout/navbar/index"
import {Projects} from "./components/layout/projects/index"
import {Github} from "./components/layout/github/index"
import {SmoothScroll} from "./components/ui/smoothscrool/index"
import {Footer} from './components/layout/footer/index'
import {Contact} from './components/layout/contact/index'
import {Resume} from './components/layout/resume/index'

export function App() {
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
      <Navbar lang="pt-BR" />
      <Hero lang="pt-BR"/>
      <Projects lang="pt-BR" />
      <Github lang="pt-BR"/>
      <Resume />
      <Contact/>
      <Footer />
      <SmoothScroll />
    </div>
  )
}