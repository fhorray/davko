import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import imageModal1 from "../../assets/images/modal/modal-image-01.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

// USERS DATA
import Users from "../../data/users.json";

// GOOGLE & FACEBOOK ICONS
import GoogleIcon from "../../assets/images/google-icon.svg";
import FacebookIcon from "../../assets/images/facebook-icon.svg";

const AccountModal = ({ setOpenAcc }) => {
  let [formValue, setFormValue] = useState({ email: "", password: "" });

  const getEmail = (e) => {
    return (formValue.email = e.target.value);
  };
  const getPassword = (e) => {
    return (formValue.password = e.target.value);
  };

  // VERIFICAÇÃO DE LOGIN E SENHA
  const verifyUserData = () => {
    const emails = Users.map((user) => user.email);
    const passwords = Users.map((user) => user.password);

    if (
      emails.includes(formValue.email) &&
      passwords.includes(formValue.password)
    ) {
      console.log("Usuario Logado!");
    } else {
      console.log("Login e senha incorretos!");
    }
  };

  return (
    <div className="account-modal">
      <div className="modal-container">
        {/* CLOSE ICON */}
        <FontAwesomeIcon
          className="close-icon"
          icon={faTimes}
          onClick={() => setOpenAcc(false)}
        />

        {/* FORM AREA */}
        <div className="form-container">
          <form className="form-area">
            <h4>Welcome Back!</h4>
            <label htmlFor="name">E-mail:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="myaccount@email.com"
              onChange={getEmail}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              onChange={getPassword}
            />
            <PrimaryButton title="Login" formValue={verifyUserData} />
          </form>

          <span className="separator">or</span>

          <div className="login-with">
            <a href="#" className="google">
              <img src={GoogleIcon} alt="Google Icon" />
              Google
            </a>

            <a href="#" className="facebook">
              <img src={FacebookIcon} alt="Facebook Icon" />
              Facebook
            </a>
          </div>

          <p className="no-account">
            Don't have one?
            <a href="#">
              <strong> Sing Up</strong>
            </a>
          </p>
        </div>

        {/* IMAGE AREA */}
        <div className="image-area">
          <img src={imageModal1} alt="Modal Image" />
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
