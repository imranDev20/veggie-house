import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/inventory/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  console.log(item);
  return (
    <main className="h-screen">
      <div className="max-w-4xl mx-auto px-20 flex my-10">
        <div className="w-1/2 border rounded overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={item.image}
            alt=""
          />
        </div>
        <div className="w-1/2 p-5">
          <h2 className="text-4xl text-neutral-600 font-['Playfair_Display'] font-semibold">
            {item.name}
          </h2>
          <p className="text-3xl my-3 text-green-600 font-medium">
            {item.price}
          </p>
          <p className="text-neutral-500 my-5">{item.description}</p>
          <div className="my-5">
            <p className="text-neutral-500 text-sm my-2">
              <span className="font-semibold ">Item ID:</span>
              <span className="text-orange-500"> {item._id}</span>
            </p>
            <p className="text-neutral-500 text-sm my-2">
              <span className="font-semibold ">Quantity:</span>
              <span className="text-orange-500"> {item.quantity}</span>
            </p>
            <p className="text-neutral-500 text-sm my-2">
              <span className="font-semibold ">Supplier:</span>
              <span className="text-orange-500"> {item.supplier}</span>
            </p>
          </div>

          <div className="flex items-center">
            <input
              className="bg-neutral-100 rounded-l px-3 py-2"
              type="number"
            />
            <button className="bg-green-600/30 text-green-600 px-3 py-2 rounded-r font-semibold">
              Restock
            </button>
          </div>
          <button className="my-3 bg-orange-600/30 text-orange-600 rounded px-3 py-2 font-semibold">
            Delivered
          </button>
        </div>
      </div>
    </main>
  );
};

export default ItemDetails;
