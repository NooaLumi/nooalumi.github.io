import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout>
      <h1>Work in progress!</h1>
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Nooa's Homepage" description="The homepage of Nooa Lumilaakso"/>

export default IndexPage
