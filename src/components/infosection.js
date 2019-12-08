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
        <div>More Links</div>
        <div>Social Media</div>
    </section>
</div>

export default InfoSection