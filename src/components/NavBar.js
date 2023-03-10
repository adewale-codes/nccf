import React, { useState } from "react";
import { Link } from "react-router-dom";
import nlogo from '../assets/nlogo.png'
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img className="nav-logo" src={nlogo} alt='logo' />
            {/* <i className="fas fa-code"></i> */}
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/programs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/donate"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Donate
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
