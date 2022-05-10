import React from "react";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import InventoryItem from "./InventoryItem";
import Skeleton from "../Shared/Skeleton";
import { BsPlusLg } from "react-icons/bs";

const Inventory = ({ isHome }) => {
  const { inventory } = useInventory();

  return (
    <section className="w-full bg-neutral-50 py-20">
      <div className="container mx-auto px-5 lg:px-20 ">
        <div className="flex justify-center items-center relative">
          <h2 className="text-4xl lg:text-5xl text-center font-semibold text-neutral-600 font-['Playfair_Display'] relative after:content-[''] after:absolute after:w-[100%] after:h-[5px] after:-bottom-7 after:left-1/2 after:-translate-x-1/2 after:bg-green-600/50">
            Inventory Items
          </h2>
          {/* {!isHome && (
            <Link
              className="py-3 px-4 bg-orange-500/20 text-orange-500 font-semibold rounded absolute right-0 hover:bg-orange-500 hover:text-white transition-colors flex items-center"
              to={`/inventory/add-new-item`}
            >
              Add New Item <BsPlusLg className="ml-2" />
            </Link>
          )} */}
        </div>

        <div className="mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* add new button */}
          {!isHome && (
            <div className="shadow-lg rounded-lg overflow-hidden bg-white flex flex-col justify-center items-center min-h-[608px]">
              <Link to="/inventory/add-new-item">
                <div className="flex flex-col justify-center items-center rounded-full w-60 h-60 bg-neutral-100 p-10 overflow-hidden ]">
                  <span className="text-4xl text-neutral-600">+</span>
                  <span className="text-neutral-600 text-2xl">
                    Add New Item
                  </span>
                </div>
              </Link>
            </div>
          )}
          {isHome
            ? inventory.length !== 0
              ? inventory
                  .slice(0, 6)
                  .map((item) => (
                    <InventoryItem
                      isHome={isHome}
                      key={item?._id}
                      id={item?._id}
                      name={item?.name}
                      image={item?.image}
                      price={item?.price}
                      quantity={item?.quantity}
                      supplier={item?.supplier}
                      description={item?.description}
                    />
                  ))
              : [0, 1, 2, 3, 4, 5].map((n) => <Skeleton key={n} />)
            : inventory.length !== 0
            ? inventory.map((item) => (
                <InventoryItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                  supplier={item.supplier}
                  description={item.description}
                />
              ))
            : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
                <Skeleton key={n} />
              ))}
        </div>
        {isHome && (
          <div className="flex justify-center">
            <Link
              className=" bg-orange-500/20 px-5 py-3 text-orange-500 font-semibold rounded hover:bg-orange-500 hover:text-white transition-colors "
              to={`/inventory`}
            >
              Manage Inventories
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Inventory;
