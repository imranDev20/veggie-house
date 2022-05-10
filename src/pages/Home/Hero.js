import React from "react";
import { Link } from "react-router-dom";
import VegetableImage from "../../images/basket-full-vegetables.jpeg";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="container px-5 lg:px-20 mx-auto py-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="text-7xl lg:text-8xl font-semibold font-['Playfair_Display'] text-neutral-600 text-center lg:text-left">
            Fresh & Organic
          </h1>
          <p className="my-5 text-center lg:text-left text-xl text-neutral-500 leading-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            delectus corporis ex nihil nostrum! Repellendus at accusamus sequi
            necessitatibus officia!
          </p>
          <Link
            className="px-5 py-3 text-orange-500 font-semibold rounded bg-orange-500/20 hover:bg-orange-500 hover:text-white transition-colors inline-block"
            to="/inventory"
          >
            View All
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-full object-contain"
            src={VegetableImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
