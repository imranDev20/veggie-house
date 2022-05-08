import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const routes = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Inventory", link: "/inventory" },
    { id: 3, name: "Login", link: "/login" },
  ];
  return (
    <nav>
      {routes.map((route) => (
        <Link
          className="mx-2 px-2 py-2 text-lg text-neutral-600 hover:text-orange-500 transition-colors font-semibold uppercase"
          to={route.link}
          key={route.id}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
