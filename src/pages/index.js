import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Jellyfish from "../components/jellyfish";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`webdev`, `mobiledev`, `androiddev`, `gatsbyjs`, `reactjs`, `frontend`, `design`, `android`, `ios`, `cat`]} />
    <Jellyfish />
  </Layout>
)

export default IndexPage
