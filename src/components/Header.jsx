import { Company_Logo } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
