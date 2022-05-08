import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/inventory`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return { inventory, setInventory };
};

export default useInventory;
