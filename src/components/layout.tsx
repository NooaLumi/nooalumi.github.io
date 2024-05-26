import * as React from "react"
import * as styles from "./layout.module.css"
import { Link } from "gatsby"
import Socials from "../components/socials"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <header className={styles.navigation}>
      <nav className={styles.navigationItems}>
        <Link to="/"><p className={styles.heading}>Nooa Lumilaakso</p></Link>
        <Link to="/">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
    <main className={styles.contentContainer}>
      <div className={styles.content}>
        {children}
      </div>
    </main>
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        Hit me up —&gt; <em><a href="mailto:nooa.lumilaakso@gmail.com">nooa.lumilaakso@gmail.com</a></em>
        <Socials/>
      </div>
    </footer>
  </>
)

export default Layout
