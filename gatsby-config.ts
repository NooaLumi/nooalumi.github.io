import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Nooa Lumilaakso's Homepage`,
    description: `Hello! My name is Nooa, and I do programming and a bunch of other cool stuff 🔥`,
    siteUrl: `https://nooalumi.github.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://nooalumi.github.io',
        sitemap: 'https://nooalumi.github.io/sitemap-index.xml',
        policy: [{userAgent: '*', disallow: '/images/nocrawl/'}]
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 680
            }
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs" // should be placed after "gatsby-remark-autolink-headers"!
        ]
      }

    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "./content/blog/"
      },
      __key: "blog"
    }
  ]
};

export default config;
