import React from "react";
import NavBar from "../navbar/NavBar";
import Hero from "../hero/Hero";

const Header = () => {
  return (
    <div className="header-bg min-h-[803px] w-full">
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
};

export default Header;
