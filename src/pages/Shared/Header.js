import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-white py-5">
      <div className="container mx-auto px-5 xl:px-20 flex justify-between items-center">
        <Logo />
        <Menu />
        <FaBars className="text-3xl hover:text-orange-500 cursor-pointer transition-colors block lg:hidden" />
      </div>
    </header>
  );
};

export default Header;
