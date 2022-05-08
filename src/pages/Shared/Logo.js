import React from "react";
import { GiPlantSeed } from "react-icons/gi";

const Logo = () => {
  return (
    <div className="text-green-600 text-3xl font-semibold font-['Playfair_Display'] flex items-center">
      <GiPlantSeed className="mr-2" />
      Veggie House
    </div>
  );
};

export default Logo;
