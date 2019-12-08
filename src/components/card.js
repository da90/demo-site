import React from "react"
import Image from "../components/image"
import Badges from "../components/badges"

const Card = (props) => <section className="card">
    <Image alt="Terry Morgan's Face" filename="thumbnail_profile_pic.png" />
    <i class="far fa-envelope" title="E-mail Terry"></i>
    <i class="fas fa-cogs" title="More..."></i>
    <div>
        <h3>Terry Morgan</h3>
        <a href="mailto:terry.morgan@centizu.com">terry.morgan@centizu.com</a>
        <p><strong>Last access to site:</strong></p>
        <p>Thursday, 5 October 2017</p>
        <h3>Badges</h3>
        <Badges/>
    </div>
</section>

export default Card