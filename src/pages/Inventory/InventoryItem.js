import React from "react";
import { Link } from "react-router-dom";

const InventoryItem = ({
  id,
  name,
  image,
  quantity,
  supplier,
  price,
  description,
}) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white flex flex-col">
      <div className="w-full h-72">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-2xl my-2 font-semibold text-neutral-600 font-['Playfair_Display']">
            {name}
          </h4>
          <p className="text-2xl font-medium  text-green-600">{price}/kg</p>

          <p className="text-neutral-500 my-3">{description}</p>
          <div className="flex justify-between my-2">
            <p className="text-sm font-semibold text-orange-500 rounded">
              <span className="text-neutral-600">Available:</span> {quantity} kg
            </p>
            <p className="text-sm text-orange-500 font-semibold rounded">
              <span className="text-neutral-600">Supplier:</span> {supplier}
            </p>
          </div>
        </div>
        <Link
          to={`/inventory/${id}`}
          className="bg-green-600/20 text-green-600 hover:bg-green-600 hover:text-white transition-colors inline-block text-center mt-5 rounded py-2 font-semibold"
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default InventoryItem;
