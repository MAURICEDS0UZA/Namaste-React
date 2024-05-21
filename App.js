import React from "react";
import ReactDOM from "react-dom/client";

// *header component
const Header = () => {
  return (
    <>
      <div className="footer">
        <div className="company-logo">
          <img
            className="logo-img"
            src="data:image/png;base64,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"
            alt="image"
          ></img>
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

const App = () => {
  return (
    <>
      <div className="app-container">
        <Header />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
