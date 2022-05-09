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
    // const email =

    const item = { name, image, price, quantity, supplier, description };

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
    <div className="bg-red-100 max-w-sm mx-auto">
      <form
        onSubmit={handleAddItem}
        action=""
        className="flex flex-col justify-center items-center"
      >
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="image" placeholder="Paste your image URL" />
        <input type="text" name="price" placeholder="Price" />
        <input type="text" name="quantity" placeholder="Quantity" />
        <input type="text" name="supplier" placeholder="Supplier name" id="" />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Item description...."
        ></textarea>
        <input type="submit" value="Add New Item" />
      </form>
    </div>
  );
};

export default AddNewItem;
