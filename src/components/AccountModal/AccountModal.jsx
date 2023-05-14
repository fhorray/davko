import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import imageModal1 from "../../assets/images/modal/modal-image-01.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

// USERS DATA
import Users from "../../data/users.json";

// MODAL IMAGES
import ModalImages from "../../data/acc-modal-images.json";

// ICONS
import GoogleIcon from "../../assets/images/google-icon.svg";
import FacebookIcon from "../../assets/images/facebook-icon.svg";

const AccountModal = ({ setOpenAcc }) => {
  // LOGIN AND PASSWORD VERIFICATION
  let [formValue, setFormValue] = React.useState({ email: "", password: "" });
  const getEmail = (e) => {
    setFormValue({ ...formValue, email: e.target.value });
  };
  const getPassword = (e) => {
    setFormValue({ ...formValue, password: e.target.value });
  };

  const verifyUserData = () => {
    const emails = Users.map((user) => user.email);
    const passwords = Users.map((user) => user.password);
    const names = Users.map((user) => user.name);
    const ids = Users.map((user) => user.id);

    if (formValue.email === "" || formValue.password === "") {
      alert("Preencha seu email");
    } else if (
      emails.includes(formValue.email) &&
      passwords.includes(formValue.password)
    ) {
      console.log(`Bem vindo USUARIO`);
      return true;
    } else {
      console.log("Login e senha incorretos!");
      return false;
    }
  };

  // CHANGE MODAL IMAGE
  const handleChangeImage = () => {
    const randomImage = Math.floor(Math.random() * ModalImages.length);
    return ModalImages[randomImage];
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
          <img src={handleChangeImage()} alt="Modal Image" />
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
