import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"

interface DataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    }
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, children }) => {
  return (
    <main className="content-container">
      <div className="content">
        <Link to={'/'} className="button button-outline">back to all posts</Link><br/>
        <span>{data.mdx.frontmatter.date}</span>
        {children}
      </div>
    </main>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head: HeadFC<DataProps> = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default IndexPage