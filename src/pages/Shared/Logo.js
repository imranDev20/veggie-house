import React from "react";
import { GiPlantSeed } from "react-icons/gi";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="text-green-600 text-3xl font-semibold font-['Playfair_Display'] flex items-center">
      <GiPlantSeed className="mr-2" />
      <Link to={`/`}>Veggie House</Link>
    </div>
  );
};

export default Logo;
