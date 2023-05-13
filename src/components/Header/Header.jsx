import React, { useState } from "react";
import Logo from "../../assets/images/davko-logo.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import UserIcon from "../../assets/images/user.svg";
import SearchIcon from "../../assets/images/search.svg";
import CartIcon from "../../assets/images/shopping-bag-line.svg";

// SASS
import "../../assets/sass/main.scss";
import AccountModal from "../AccountModal/AccountModal";

const Header = () => {
  // useState Account Modal
  let [openAcc, setOpenAcc] = useState(false);

  function openModalAccount() {
    setOpenAcc(true);
  }

  return (
    <>
      {/* MODALS */}
      {openAcc ? <AccountModal setOpenAcc={setOpenAcc} /> : ""}

      {/* MAIN MESSAGE */}
      <div className="main-message">
        <div className="container">
          <p>
            Use the code: FHORRAY85, and get 85% discount on your first
            purchase!
          </p>
          <div className="line"></div>
          <span className="learn-more">
            <a href="">
              Learn More
              <img src={ArrowRight} alt="Arrow Right" />
            </a>
          </span>
        </div>
      </div>

      {/* HEADER */}
      <header>
        <div className="container">
          <nav className="navbar">
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>

          <img className="logo" src={Logo} alt="Davko Logo" />

          <ul className="right-icons">
            <li>
              <img src={SearchIcon} alt="Search Icon" />
            </li>
            <li>
              <img onClick={openModalAccount} src={UserIcon} alt="User Icon" />
            </li>
            <li>
              <img src={CartIcon} alt="Cart Icon" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
