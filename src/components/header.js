import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Card from "../components/card"

const Header = ({ siteTitle }) => (
  /*<header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>*/

  <header>
    <section>
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <Link to="/record-of-learning" className="button button--primary" title="Check out your Record of Learning">Record of Learning</Link>
    </section>
    <Card/>  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
