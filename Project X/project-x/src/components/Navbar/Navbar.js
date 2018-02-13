import React from "react";
import "./Navbar.css"

const Navbar = () => (
    <nav>
    <div className="nav-wrapper">
      <a href="" className="brand-logo">BumbleBot</a>
      {/* <div className="img-container">
      <img alt=""src = "https://cdn.xl.thumbs.canstockphoto.com/cartoon-bee-flying-image_csp43545274.jpg"/>
    </div>      */}
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="badges.html">Log-in</a></li>
        <li><a href="collapsible.html">Create Commands</a></li>
        <li><a href="sass.html">Sign Up</a></li>
      </ul>
    </div>
  </nav>
);



export default Navbar;