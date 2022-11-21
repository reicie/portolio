import React, {useState} from 'react';
import './navbar.css';

import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenu} from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      {/* app logo */}
      <div className={nav ? "logo dark" : "logo"}>
        <h2>Joyce R Kimojino-Weiss</h2>
      </div>
      <ul className="nav-menu">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
        <li>RESUME</li>
      </ul>

      <div className="hamburger" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose className="icon dark" />
        ) : (
          <HiOutlineMenu className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
        </ul>

        <div className="mobile-menu-button">
          {/* <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div> */}
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaPinterest className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar