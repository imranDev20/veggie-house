import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white py-5">
      <div className="container mx-auto px-5 xl:px-20 flex justify-between items-center">
        <Logo />
        <Menu />
        {open ? (
          <FaTimes
            onClick={() => setOpen(!open)}
            className="text-3xl hover:text-orange-500 cursor-pointer transition-colors block"
          />
        ) : (
          <FaBars
            onClick={() => setOpen(!open)}
            className="text-3xl hover:text-orange-500 cursor-pointer transition-colors block lg:hidden"
          />
        )}
        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
