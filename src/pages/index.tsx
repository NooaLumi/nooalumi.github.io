import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"

interface DataProps {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string;
        title: string;
        slug: string;
      }
      id: string;
      excerpt: string;
    }[];
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <main className="content-container">
      <div className="content">
        <h1><span className="monospace">//</span> Blog Posts</h1>
        {
          data.allMdx.nodes.map(node => (
            <article>
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p className="excerpt-text">{node.excerpt}</p>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </div>
    </main>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage