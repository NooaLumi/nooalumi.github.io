import * as React from "react"
import * as styles from "./layout.module.css"
import { Link } from "gatsby"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <nav className={styles.navigation}>
      <div className={styles.navigationItems}>
        <h4>Nooa Lumilaakso</h4>
        <Link to="/">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
    <main className={styles.contentContainer}>
      <div className={styles.content}>
        {children}
      </div>
    </main>
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        Hit me up —> <em><a href="mailto:nooa.lumilaakso@gmail.com">nooa.lumilaakso@gmail.com</a></em>
      </div>
    </footer>
  </>
)

export default Layout
