
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Logo from "../assets/img/logo.png";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  }, []); // Add an empty dependency array to ensure this effect runs only once

  return (
    <header
      className={`${bg && "bg-amber-300 shadow-md py-4"}
      p-8 lg:px-0 
      w-full fixed z-10 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Home" />
        </Link>
        <Nav />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
