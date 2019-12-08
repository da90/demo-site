import React from "react"
import { Link } from "gatsby"
import MiniNav from "../components/mininav"

const Navigation = () => <nav>
    <MiniNav opt1="Hello, Phil!" opt2="Help" opt3="Contact Us" />
    <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/record-of-learning">Record of Learning</Link>
        <Link to="/record-of-learning">Meet the team</Link>
        <span className="input__group">
            <input type="text" placeholder="Search for courses" />
            <i className="fas fa-search" title="Search"></i>
        </span>
    </div>
</nav>

export default Navigation