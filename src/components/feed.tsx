import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "./feed.module.css"

interface FeedProps {
  postCount?: number;
  hidePostId?: string;
}

const Feed: React.FC<FeedProps> = ({ postCount, hidePostId }) => {
  const { allMdx } = useStaticQuery(
    graphql`
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
  );

  const renderNodes = React.useMemo(
    () => postCount && (allMdx.nodes.length > postCount) ? allMdx.nodes.slice(0, postCount) : allMdx.nodes, 
    [allMdx, postCount]
  );

  return (
    <>
      {
        renderNodes.map(node => (!hidePostId || hidePostId !== node.id) && (
          <article key={node.id}>
            <h3 className={styles.postName}>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <p className={styles.excerptText}>{node.excerpt}</p>
            <p className={styles.postDate}>{node.frontmatter.date}</p>
          </article>
        ))
      }
    </>
  )
}

export default Feed
