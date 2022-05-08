import React from "react";
import Inventory from "../Inventory/Inventory";
import Hero from "./Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <Inventory isHome />
    </main>
  );
};

export default Home;
