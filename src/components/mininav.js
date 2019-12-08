import React from "react"
import { Link } from "gatsby"

const MiniNav = (props) => <div className="mininav">
    <Link to="/account">{props.opt1}</Link>
    <Link to="/contact-us#help">{props.opt2}</Link>
    <Link to="/contact-us">{props.opt3}</Link>
</div>

export default MiniNav