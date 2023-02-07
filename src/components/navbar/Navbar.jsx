import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
// import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home </a>
      </p>
      <p>
        <a href="#wigpt">What is GPT ? </a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features"> </a>Case studies
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="makergroup__navbar">
      <div className="maker__navbar-links">
        <div className="maker__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="maker__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="maker__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="maker__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="maker__navbar-menu_container scale-up-center">
            <div className="maker__navbar-menu_container-links">
              <Menu />
              <div className="maker__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
