import React from "react";
import Logo from "../../assets/images/davko-logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>All rights reserved</p>
        <img src={Logo} alt="Davko Logo" />
      </div>
    </footer>
  );
};

export default Footer;
