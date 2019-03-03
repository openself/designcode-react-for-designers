import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import logo from "../images/logo-designcode.svg"

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={logo}/>
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/try">
        <button>Try for free</button>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
