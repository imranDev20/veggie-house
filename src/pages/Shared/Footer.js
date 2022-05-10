import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-20">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-3 ">
          <div className="px-5 ">
            <Logo />
            <p className="text-neutral-500 mt-3">
              Online warehouse management system that makes handling items easy,
              quick & secure. Manage multiple warehouses with efficient
              warehouse management software.
            </p>
          </div>
          <div className="px-5 flex flex-col items-center">
            <h4 className="text-green-600 font-semibold text-xl mb-2">Pages</h4>
            <Link
              className="block text-neutral-500 hover:text-orange-500"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block text-neutral-500 hover:text-orange-500"
              to="/inventory"
            >
              Inventory
            </Link>
            <Link
              className="block text-neutral-500 hover:text-orange-500"
              to="/login"
            >
              Login
            </Link>
          </div>
          <div className="px-5">
            <div className="mb-5">
              <h4 className="text-green-600 font-semibold text-xl mb-2">
                Socials
              </h4>
              <div className="flex text-3xl text-neutral-500">
                <a href="/">
                  <FaFacebookSquare className="mr-2  cursor-pointer hover:text-orange-500 transition-colors" />
                </a>
                <a href="/">
                  <FaInstagramSquare className="mr-2 cursor-pointer hover:text-orange-500 transition-colors" />
                </a>
                <a href="/">
                  <FaTwitterSquare className="mr-2 cursor-pointer hover:text-orange-500 transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-green-600 font-semibold text-xl mb-2">
                Contact
              </h4>
              <div>
                <p className="font-sm text-neutral-500 flex items-center my-2">
                  <FaMapMarkerAlt className="mr-2" /> Kobi Kazi Nazrul Islam
                  Road, Nothullabad, Barishal - 8200
                </p>
                <a
                  className="font-sm text-neutral-500 hover:text-orange-500 transition-colors flex items-center  my-2"
                  href="mailto:example@test.com"
                >
                  <FaPhoneAlt className="mr-2" /> example@test.com
                </a>
                <a
                  className="font-sm text-neutral-500 hover:text-orange-500 transition-colors flex items-center  my-2"
                  href="tel:01232131231"
                >
                  <FaEnvelope className="mr-2" /> 01232131231
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-neutral-500">
          Copyright @VeggieHouse 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
