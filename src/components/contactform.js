import React from "react"
import Image from "../components/image"
import {Link} from "gatsby"

const ContactForm = () => <section className="contactform">
    <div>
        <Image alt="Woman with a Laptop" filename="img6.png" />        
    </div>
    <div>
        <h1>AKdsalk jsalkdj ajdas</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <form>
            <div>
            <label>Name</label>
            <input type="text"/>
            </div>
            <div>
            <label>E-mail</label>
            <input type="text"/>
            </div>
            <div>
            <label>Message</label>
            <input type="text"/>
            </div>
            <Link to="#" className="button button--primary">Send Message</Link>
        </form>
    </div>
</section>

export default ContactForm