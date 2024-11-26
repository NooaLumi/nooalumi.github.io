import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Feed from "../../components/feed"
import DoomText, {DoomTextOption} from "../../components/doomtext"

const BlogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <DoomText doomText={DoomTextOption.ReadMyStuff}/>
      <Feed/>
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Nooa's Blog" description="Read My Stuff!" pathname="/blog"/>

export default BlogPage
