import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

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
    <Layout>
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
    </Layout>
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

export const Head: HeadFC = () => <Seo title="Nooa's Homepage" description="The homepage of Nooa Lumilaakso"/>

export default IndexPage
