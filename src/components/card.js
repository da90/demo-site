import React from "react"
import Image from "../components/image"

const Card = (props) => <section className="card">
    <Image />
    <i class="far fa-envelope" title="E-mail Terry"></i>
    <div>
        <h3>Terry Morgan</h3>
        <p>terry.morgan@centizu.com</p>
        <p><strong>Last access to site:</strong></p>
        <p>Thursday, 5 October 2017</p>
        <h3>Badges</h3>
    </div>
</section>

export default Card