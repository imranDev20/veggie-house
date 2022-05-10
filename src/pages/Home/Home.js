import React from "react";
import Inventory from "../Inventory/Inventory";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <Inventory isHome />
      <Testimonials />
    </main>
  );
};

export default Home;
