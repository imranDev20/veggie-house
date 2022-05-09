import React from "react";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import InventoryItem from "./InventoryItem";
import InventorySkeleton from "./InventorySkeleton";
import { BsPlusLg } from "react-icons/bs";

const Inventory = ({ isHome }) => {
  const { inventory } = useInventory();

  return (
    <section className="w-full bg-neutral-50 py-20">
      <div className="container mx-auto px-20 ">
        <div className="flex justify-center items-center relative">
          <h2 className=" text-5xl text-center font-semibold text-neutral-600 font-['Playfair_Display'] relative after:content-[''] after:absolute after:w-[100%] after:h-[5px] after:-bottom-7 after:left-1/2 after:-translate-x-1/2 after:bg-green-600/50">
            Intentory Items
          </h2>
          {!isHome && (
            <Link
              className="py-3 px-4 bg-orange-500/20 text-orange-500 font-semibold rounded absolute right-0 hover:bg-orange-500 hover:text-white transition-colors flex items-center"
              to={`/inventory/add-new-item`}
            >
              Add New Item <BsPlusLg className="ml-2" />
            </Link>
          )}
        </div>

        <div className="mt-20 mb-10 grid grid-cols-3 gap-10">
          {isHome
            ? inventory.length !== 0
              ? inventory
                  .slice(0, 6)
                  .map((item) => (
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
              : [0, 1, 2, 3, 4, 5].map((n) => <InventorySkeleton key={n} />)
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
            : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <InventorySkeleton key={n} />
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
