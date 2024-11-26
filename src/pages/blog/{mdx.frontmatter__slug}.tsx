import * as React from "react"
import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Feed from "../../components/feed"
import DoomText, {DoomTextOption} from "../../components/doomtext"

interface DataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      slug: string;
    }
    excerpt: string;
    id: string;
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, children }) => {
  return (
    <Layout>
      <p className="text-minor">Posted on {data.mdx.frontmatter.date}</p>
      {children}
      <br/><hr/>
      <DoomText doomText={DoomTextOption.OtherRecentPosts}/>
      <Feed hidePostId={data.mdx.id} postCount={3}/>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
      }
      excerpt
      id
    }
  }
`

export const Head: HeadFC<DataProps> = ({ data }) => <Seo title={`${data.mdx.frontmatter.title} | Nooa's Blog`} description={data.mdx.excerpt} pathname={`/blog/${data.mdx.frontmatter.slug}`} />

export default IndexPage
