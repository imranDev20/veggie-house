import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [restockCount, setRestockCount] = useState(0);

  console.log(item._id);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/inventory/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  // Delivered , minus quantity by 1
  const handleDelivered = () => {
    const quantity = parseInt(item?.quantity);

    const newQuantity = quantity - 1;
    console.log(newQuantity);
    const updatedItem = { quantity: newQuantity };

    console.log(updatedItem);

    fetch(`${process.env.REACT_APP_SERVER_URL}/inventory/${itemId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("item delivered");
      });
  };

  const handleRestock = () => {
    const quantity = parseInt(item?.quantity);

    const newQuantity = quantity + parseInt(restockCount);
    const updatedItem = { quantity: newQuantity };

    fetch(`${process.env.REACT_APP_SERVER_URL}/inventory/${itemId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Item updated");
      });
  };

  return (
    <main className="min-h-[600px]">
      {item._id ? (
        <>
          <div className="max-w-4xl mx-auto px-5 lg:px-20 flex flex-col lg:flex-row my-10">
            <div className="w-full lg:w-1/2 border rounded overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={item.image}
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 p-5">
              <h2 className="text-4xl text-neutral-600 font-['Playfair_Display'] font-semibold">
                {item.name}
              </h2>
              <p className="text-3xl my-3 text-green-600 font-medium">
                ৳{item.price}
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
                  onChange={(e) => setRestockCount(e.target.value)}
                  className="bg-neutral-100 outline-none focus:ring-2 focus:ring-green-600/30 rounded-l px-3 py-2"
                  type="number"
                  name="stockfield"
                  min={0}
                />
                <button
                  onClick={() => handleRestock()}
                  className="bg-green-600/30 text-green-600 px-3 py-2 rounded-r font-semibold"
                >
                  Restock
                </button>
              </div>
              <button
                onClick={() => handleDelivered()}
                className="my-3 bg-orange-600/30 text-orange-600 rounded px-3 py-2 font-semibold"
              >
                Delivered
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link
              className=" bg-orange-500/20 px-5 py-3 text-orange-500 font-semibold rounded hover:bg-orange-500 hover:text-white transition-colors "
              to={`/inventory`}
            >
              Manage Inventories
            </Link>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-96">
          <ScaleLoader color={"#16a34a"} loading={item._id} size={60} />
        </div>
      )}
    </main>
  );
};

export default ItemDetails;
