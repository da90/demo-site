import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import External from "../components/external"
import Image from "../components/image"
import CurrentLearning from "../components/currentlearning"
import HeroSection from "../components/herosection"
import Gallery from "../components/gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <External/>
    <Banner/>
    <CurrentLearning/>
    <HeroSection/>
    <Gallery/>
  </Layout>
)

export default IndexPage
