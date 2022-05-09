import React from "react";
import app from "../../firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(app);

const AddNewItem = () => {
  const [user, loading, error] = useAuthState(auth);

  console.log(user);

  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const description = event.target.description.value;
    const email = user?.email;

    const item = { name, image, price, quantity, supplier, description, email };

    const url = `${process.env.REACT_APP_SERVER_URL}/inventory`;
    console.log(url);
    console.log(item);

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully");
        event.target.reset();
      })
      .catch((error) => console.log("Error:", error));
  };
  return (
    <div className=" max-w-sm mx-auto">
      <h2 className="mb-16 mt-10 text-5xl text-center font-semibold text-neutral-600 font-['Playfair_Display'] relative after:content-[''] after:absolute after:w-[100%] after:h-[5px] after:-bottom-7 after:left-1/2 after:-translate-x-1/2 after:bg-green-600/50">
        Intentory Items
      </h2>
      <form
        onSubmit={handleAddItem}
        action=""
        className="flex flex-col justify-center items-center"
      >
        <div className="flex justify-between">
          <input
            className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-[49%] bg-neutral-100"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-[49%] bg-neutral-100"
            type="text"
            name="price"
            placeholder="Price"
          />
        </div>

        <input
          className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-full bg-neutral-100"
          type="text"
          name="image"
          placeholder="Paste your image URL"
        />
        <div className="flex justify-between">
          <input
            className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-[49%] bg-neutral-100"
            type="text"
            name="quantity"
            placeholder="Quantity"
          />
          <input
            className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-[49%] bg-neutral-100"
            type="text"
            name="supplier"
            placeholder="Supplier name"
            id=""
          />
        </div>
        <textarea
          name="description"
          className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-full bg-neutral-100"
          id=""
          cols="20"
          rows="5"
          placeholder="Item description...."
        ></textarea>
        <input
          className="bg-green-600/30 w-full my-3 py-2 text-green-600 rounded cursor-pointer hover:bg-green-600 hover:text-white transition-colors"
          type="submit"
          value="Add New Item"
        />
      </form>
    </div>
  );
};

export default AddNewItem;
