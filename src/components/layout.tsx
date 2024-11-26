import * as React from "react"
import * as styles from "./layout.module.css"
import { Link } from "gatsby"
import Socials from "../components/socials"
import DoomText, {DoomTextOption} from "../components/doomtext"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <header className={styles.navigation}>
      <nav className={styles.navigationItems}>
        <Link to="/" title="Home">
          <DoomText doomText={DoomTextOption.FullName}/>
        </Link>
        <Link to="/" title="About">
          <div className="center-image-vertical max-height">
            <DoomText doomText={DoomTextOption.About}/>
          </div>
        </Link>
        <Link to="/blog" title="Blog">
          <div className="center-image-vertical max-height">
            <DoomText doomText={DoomTextOption.Blog}/>
          </div>
        </Link>
      </nav>
    </header>
    <main className={styles.contentContainer}>
      <div className={styles.content}>
        {children}
      </div>
    </main>
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span className={styles.footerText}>Hit me up! —&gt; <em><a href="mailto:nooa.lumilaakso@gmail.com">nooa.lumilaakso@gmail.com</a></em></span>
        <Socials/>
      </div>
    </footer>
  </>
)

export default Layout
