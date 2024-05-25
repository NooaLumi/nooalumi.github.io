import * as React from "react"
import { Link, PageProps } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
        <h1>404 Not Found</h1>
        <Link to="/">Go home</Link>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
