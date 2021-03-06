import React, { useEffect, useState } from "react";
import app from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import MyItem from "./MyItem";
import Skeleton from "../Shared/Skeleton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const auth = getAuth(app);

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `${process.env.REACT_APP_SERVER_URL}/inventory/filter?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getMyItems();
  }, [user]);

  return (
    <main className="container mx-auto px-5 lg:px-20 my-10">
      <div className="max-w-xs mx-auto">
        <h2 className="mb-16 mt-10 text-5xl text-center font-semibold text-neutral-600 font-['Playfair_Display'] relative after:content-[''] after:absolute after:w-[100%] after:h-[5px] after:-bottom-7 after:left-1/2 after:-translate-x-1/2 after:bg-green-600/50">
          My Items
        </h2>
      </div>
      <div className="mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {myItems.map((item) => (
          <MyItem
            key={item?._id}
            id={item?._id}
            image={item?.image}
            name={item?.name}
            price={item?.price}
            description={item?.description}
            supplier={item?.supplier}
            quantity={item?.quantity}
          />
        ))}
      </div>
      {myItems?.length === 0 && (
        <p className="text-center text-2xl text-neutral-600">
          You have not added any items
        </p>
      )}
    </main>
  );
};

export default MyItems;
