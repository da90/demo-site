import React from "react"
import { Link } from "gatsby"
import Progress from "../components/progress"
import MiniNav from "../components/mininav"

const CurrentLearning = () => <section className="currentlearning">
    <MiniNav opt1="Top level" opt2="Second Level" opt3="Current Level" />
    <h1>Current Learning</h1>

    <section className="currentlearning__list">
        <div className="currentlearning__list-item">
            <div>
                <p>Name</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

        <div className="currentlearning__list-item">
            <div>
                <p>Name</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div>
                <p>Complete</p>
                <p>No</p>
            </div>

            <div>
                <Progress progress="90%"/>
            </div>

            <div>
                <p>Activities</p>
                <p>6 of 8 completed</p>
            </div>

            <div>
                <Link to="/dashboard" className="button button--secondary" title="Launch course">Launch Course</Link>
            </div>
        </div>

        <div className="currentlearning__list-item">
            <div>
                <p>Name</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            <div>
                <p>Complete</p>
                <p>No</p>
            </div>

            <div>
                <Progress progress="75%"/>
            </div>

            <div>
                <p>Activities</p>
                <p>5 of 10 completed</p>
            </div>

            <div>
                <Link to="/dashboard" className="button button--secondary" title="Launch course">Launch Course</Link>
            </div>
        </div>

        <div className="currentlearning__list-item">
            <div>
                <p>Name</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div>
                <p>Complete</p>
                <p>No</p>
            </div>

            <div>
                <Progress progress="10%"/>
            </div>

            <div>
                <p>Activities</p>
                <p>1 of 10 completed</p>
            </div>

            <div>
                <Link to="/dashboard" className="button button--secondary" title="Launch course">Launch Course</Link>
            </div>
        </div>
    </section>
</section>

export default CurrentLearning