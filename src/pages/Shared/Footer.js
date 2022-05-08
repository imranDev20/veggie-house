import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-20">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-3 ">
          <div className="px-5">
            <Logo />
            <p className="text-neutral-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              incidunt omnis vel exercitationem cumque sint corrupti, blanditiis
              placeat reiciendis ipsam?
            </p>
          </div>
          <div className="px-5">
            <h4 className="text-green-600 font-semibold text-xl my-2">Pages</h4>
            <Link
              className="block text-neutral-500 hover:text-green-600"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block text-neutral-500 hover:text-green-600"
              to="/inventory"
            >
              Inventory
            </Link>
            <Link
              className="block text-neutral-500 hover:text-green-600"
              to="/login"
            >
              Login
            </Link>
          </div>
          <div className="px-5"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
