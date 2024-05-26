import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Feed from "../../components/feed"

const BlogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1><span className="monospace">//</span> Read my stuff</h1>
      <Feed/>
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Nooa's Blog" description="The blog of Nooa Lumilaakso"/>

export default BlogPage
