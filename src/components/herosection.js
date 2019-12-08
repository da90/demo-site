import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

const HeroSection = () => <section className="hero">
    <div>
    <Image alt="Mobile phone image" filename="thumbnail_phone_mockup_screens.png"/>
    </div>
    <div>
        <h1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</h1>
    </div>

</section>

export default HeroSection