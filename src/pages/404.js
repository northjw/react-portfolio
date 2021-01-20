import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Footer from "../components/Footer"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header></Header>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Footer></Footer>
  </Layout>
)

export default NotFoundPage
