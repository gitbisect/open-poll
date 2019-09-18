import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>What topics do you want at the next AWS Community Day?</h1>
    <p>You can submit more than one topic of interest. You can also upvote another person's topic if you like that.</p>
    
  </Layout>
)

export default IndexPage
