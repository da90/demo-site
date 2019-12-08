import React from "react"
import { Link } from "gatsby"

const InfoSection = () => <div className="infosection__wrapper">
    <section className="infosection">
        <div>
            <h4>Search for Courses</h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <span class="input__group">
                <input type="text" placeholder="Search for courses" />
                <i class="fas fa-search" title="Search"></i>
            </span>
        </div>
        <div><h4>More Links</h4>
        <ul>
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">Become an Expert</Link></li>
            <li><Link to="#">How it Works</Link></li>
            <li><Link to="#">Meet the Teem</Link></li>
        </ul>
        </div>
        <div><h4>Social Media</h4>
        <ul>
            <li><Link to="#"><i class="fab fa-twitter"></i>Twitter</Link></li>
            <li><Link to="#"><i class="fab fa-facebook-f"></i>Facebook</Link></li>
            <li><Link to="#"><i class="fab fa-google-plus-g"></i>Google+</Link></li>
            <li><Link to="#"><i class="fab fa-linkedin-in"></i>LinkedIn</Link></li>
        </ul>
        </div>
    </section>
</div>

export default InfoSection