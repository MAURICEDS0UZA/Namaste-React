import { useContext, useState } from "react";
import { Company_Logo } from "../utils/constants";
import { Link } from "react-router-dom";
import user from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Log in");
  const { userLogin } = useContext(user);

  const updateLogin = () => {
    loginBtn === "Log in" ? setLoginBtn("Log out") : setLoginBtn("Log in");
  };

  return (
    <>
      <div className="p-4 m-4 flex lg:justify-between sm:justify-start">
        <div className="md:shrink-0">
          <img className=" lg:w-40" src={Company_Logo} alt="image"></img>
        </div>
        <ul className="flex flex-wrap items-center">
          <li className="px-4 py-2 m-4 font-medium bg-slate-200  hover:bg-slate-300 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 m-4 font-medium bg-slate-200  hover:bg-slate-300 rounded-lg">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 py-2 m-4 font-medium bg-slate-200  hover:bg-slate-300 rounded-lg">
            <Link to="/Contact">Contact us</Link>
          </li>
          <li className="px-4 py-2 m-4 font-medium bg-slate-200  hover:bg-slate-300 rounded-lg">
            <Link to="/">Cart</Link>
          </li>

          <li className="px-4 py-2 m-4 font-medium bg-slate-200 hover:bg-slate-300 rounded-lg">
            <div className="relative group">
              <button onClick={updateLogin}>{loginBtn}</button>
              <p className=" rounded-[50%]  bg-white  p-2 hidden group-hover:block">
                {userLogin}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
