import * as React from "react"
import * as styles from "./layout.module.css"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <main className={styles.contentContainer}>
      <div className={styles.content}>
        {children}

      </div>
    </main>
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        Nooa Lumilaakso's Homepage<br/>
        Contact: <em><a href="mailto:nooa.lumilaakso@gmail.com">nooa.lumilaakso@gmail.com</a></em>
      </div>
    </footer>
  </>
)

export default Layout
