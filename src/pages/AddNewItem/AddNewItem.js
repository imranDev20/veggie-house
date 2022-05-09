import React from "react";

const AddNewItem = () => {
  return (
    <div className="bg-red-100 max-w-sm mx-auto">
      <form action="" className="flex flex-col justify-center items-center">
        <input type="text" name="name" />
        <input type="text" name="image" placeholder="Paste your image URL" />
        <input type="text" name="price" />
        <input type="text" name="quantity" />
        <input type="text" name="supplier" id="" />
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="Add New Item" />
      </form>
    </div>
  );
};

export default AddNewItem;
