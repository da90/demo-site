import React from "react"
import { Link } from "gatsby"
import Progress from "../components/progress"

const CurrentLearning = () => <section class="currentlearning">
    <h1>Current Learning</h1>

    <section class="currentlearning__list">
        <div class="currentlearning__list-item">
            <div>
                <p>Name</p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div>
                <p>Complete</p>
                <p>No</p>
            </div>

            <div>
                <Progress progress="50%"/>
            </div>

            <div>
                <p>Activities</p>
                <p>5 of 10 completed</p>
            </div>

            <div>
                <Link to="/dashboard" className="button button--secondary" title="Launch course">Launch Course</Link>
            </div>
        </div>
    </section>
</section>

export default CurrentLearning