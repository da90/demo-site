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
import ContactForm from "../components/contactform"
import InfoSection from "../components/infosection"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <External />
    <Banner />
    <CurrentLearning />
    <HeroSection />
    <Gallery />
    <ContactForm />
    <InfoSection />
    <Footer />
  </Layout>
)

export default IndexPage
