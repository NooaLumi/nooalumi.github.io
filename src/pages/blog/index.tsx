import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Feed from "../../components/feed"

const BlogPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <h1><span className="monospace">//</span> Read my stuff</h1>
      <Feed/>
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Nooa's Homepage" description="The homepage of Nooa Lumilaakso"/>

export default BlogPage
