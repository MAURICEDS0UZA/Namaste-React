import { useState } from "react";
import { Company_Logo } from "../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Log in");

  const updateLogin = () => {
    loginBtn === "Log in" ? setLoginBtn("Log out") : setLoginBtn("Log in");
  };

  return (
    <>
      <div className="header">
        <div className="company-logo">
          <img className="logo-img" src={Company_Logo} alt="image"></img>
        </div>
        <div className="menu-bar">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <li>
              <button
                onClick={() => {
                  updateLogin();
                }}
              >
                {loginBtn}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
