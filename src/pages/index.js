import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import External from "../components/external"
import Image from "../components/image"
import CurrentLearning from "../components/currentlearning"
import HeroSection from "../components/herosection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <External/>
    <Banner/>
    <CurrentLearning/>
    <HeroSection/>
  </Layout>
)

export default IndexPage
