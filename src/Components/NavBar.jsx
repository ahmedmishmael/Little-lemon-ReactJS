import React from "react";
import Logo from "../Assets/Logo.svg";

const NavBar = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">ABOUT</a>
        </li>
        <li>
          <a href="">MENU</a>
        </li>
        <li>
          <a href="">RESERVATIONS</a>
        </li>
        <li>
          <a href="">ORDER ONLINE</a>
        </li>
        <li>
          <a href="">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
