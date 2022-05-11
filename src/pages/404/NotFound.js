import React from "react";
import { FaRegSadCry } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center h-[70vh] ">
      <p className="text-5xl text-neutral-600">404</p>
      <p className="text-neutral-600 text-2xl flex items-center">
        Page not found !!! <FaRegSadCry className="text-orange-500 ml-3" />
      </p>
    </main>
  );
};

export default NotFound;
