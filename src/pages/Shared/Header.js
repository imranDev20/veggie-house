import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="w-full bg-white py-5">
      <div className="container mx-auto px-20 flex justify-between">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
