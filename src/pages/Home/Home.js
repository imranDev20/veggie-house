import React from "react";
import Inventory from "../Inventory/Inventory";
import Contact from "./Contact";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <Inventory isHome />
      <Contact />
      <Testimonials />
    </main>
  );
};

export default Home;
