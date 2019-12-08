import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

const HeroSection = () => <section className="hero">
    <div>
    <Image alt="Mobile phone image" filename="thumbnail_phone_mockup_screens.png"/>
    </div>
    <div>
        <h1>Sed ut perspiciatis unde omnis iste natus error.</h1>
        <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <Link to="/meet-the-team" className="button button--primary" title="Find out more about us!">Find Out More</Link>
    </div>

</section>

export default HeroSection