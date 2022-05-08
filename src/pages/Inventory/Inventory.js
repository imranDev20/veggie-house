import React from "react";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import InventoryItem from "./InventoryItem";

const Inventory = ({ isHome }) => {
  const { inventory } = useInventory();

  console.log(inventory);

  return (
    <section className="w-full bg-neutral-50 py-10">
      <div className="container mx-auto px-20 ">
        <div className="flex justify-center items-center">
          <h2 className=" text-5xl text-center font-semibold text-neutral-600 font-['Playfair_Display'] relative after:content-[''] after:absolute after:w-[100%] after:h-[5px] after:-bottom-7 after:left-1/2 after:-translate-x-1/2 after:bg-green-600/50">
            Intentory Items
          </h2>
        </div>

        <div className="mt-20 mb-10 grid grid-cols-3 gap-10">
          {isHome
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
            : inventory.map((item) => (
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
