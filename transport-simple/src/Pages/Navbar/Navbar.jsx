import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="Navbar">
      <div id="logo">
        <img
          src="https://www.transportsimple.com/redesign/images/logo.png"
          alt=""
        />
      </div>
      <div id="pages">
        <div>
          <h3>Home</h3>
        </div>
        <div>
          <h3>Feature</h3>
        </div>
        <div>
          <h3>Industry</h3>
        </div>
        <div>
          <h3>About</h3>
        </div>
        <div>
          <h3>Contact Us</h3>


          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
