import { useState } from "react";
import { Company_Logo } from "../utils/constants";
import { Link } from "react-router-dom";

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
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact us</Link>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
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
