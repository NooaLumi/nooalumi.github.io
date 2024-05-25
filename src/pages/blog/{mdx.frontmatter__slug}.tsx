import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/layout"

interface DataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    }
    excerpt: string;
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, children }) => {
  return (
    <Layout>
      <Link to={'/'} className="button button-outline button-main">back to all posts</Link><br/>
      <span>{data.mdx.frontmatter.date}</span>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      excerpt
    }
  }
`

export const Head: HeadFC<DataProps> = ({ data }) => <Seo title={`${data.mdx.frontmatter.title} | Nooa's Blog`} description={data.mdx.excerpt} />

export default IndexPage
