import React from 'react'
import { Link } from 'gatsby'
import flogo from '../img/fixed-logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ height: `13.65vh`}}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item WFA-logo" title="Logo">
              <img src={flogo} alt="Well Forest logo" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                <p>About</p>
              </Link>
              <Link className="navbar-item" to="/products">
                <p>Services</p>
              </Link>
              <Link className="navbar-item" to="/contact">
                <p>Schedule</p>
              </Link>
              <Link className="navbar-item" to="/blog">
                <p>Connect</p>
              </Link>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
