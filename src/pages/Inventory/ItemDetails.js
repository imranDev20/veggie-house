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
  return <div>{item.name}</div>;
};

export default ItemDetails;
