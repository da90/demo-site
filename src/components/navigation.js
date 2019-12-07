import React from "react"
import { Link } from "gatsby"

const Navigation = () => <nav>
    <div>
        <Link to="/account">Hello, Phil!</Link>
        <Link to="/contact-us#help">Help</Link>
        <Link to="/contact-us">Contact Us</Link>
    </div>

    <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/record-of-learning">Record of Learning</Link>
        <Link to="/record-of-learning">Meet the team</Link>
        <span>
            <input type="text" />
            <i class="fas fa-search"></i>
        </span>
    </div>
</nav>

export default Navigation