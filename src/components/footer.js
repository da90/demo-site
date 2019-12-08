import React from "react"
import Image from "../components/image"
import MiniNav from "../components/mininav"

const Footer = () => <footer className="footer__wrapper">
    <div className="footer"><Image alt="Synergy Learning Logo" filename="syn-logo-2016-white.png"/>
    <div><p>Synergy Learning copyright 2017</p></div>
    <div><MiniNav opt1="FAQ" opt2="Contact Us" opt3="Help"/></div>
    </div>

</footer>

export default Footer