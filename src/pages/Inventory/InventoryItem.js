import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import useInventory from "../../hooks/useInventory";
import { useNavigate } from "react-router-dom";

const InventoryItem = ({
  id,
  isHome,
  name,
  image,
  quantity,
  supplier,
  price,
  description,
}) => {
  const { inventory, setInventory } = useInventory();
  let navigate = useNavigate();

  const handleDeleteItem = () => {
    const proceed = window.confirm("Are you sure you wnt to delete");

    if (proceed) {
      const url = `${process.env.REACT_APP_SERVER_URL}/inventory/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = inventory.filter((item) => item._id !== id);
            setInventory(remaining);
          }
        });
    }
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white flex flex-col">
      <div className="w-full h-72 relative">
        <img className="w-full h-full object-cover" src={image} alt={name} />
        {!isHome && (
          <button
            onClick={() => handleDeleteItem()}
            className="absolute top-5 right-5 text-2xl text-red-600"
          >
            <BsTrash />
          </button>
        )}
      </div>
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-2xl my-2 font-semibold text-neutral-600 font-['Playfair_Display']">
            {name}
          </h4>
          <p className="text-2xl font-medium  text-green-600">৳{price}/kg</p>

          <p className="text-neutral-500 my-3">{description}</p>
          <div className="flex justify-between my-2">
            <p className="text-sm font-semibold text-orange-500">
              <span className="text-neutral-600">Available:</span> {quantity} kg
            </p>
            <p className="text-sm text-orange-500 font-semibold">
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
