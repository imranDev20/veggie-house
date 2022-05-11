import React from "react";
import app from "../../firebase";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { MdInventory, MdPlusOne } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsCollectionFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import AvatarImage from "../../images/avatar-default.png";

const auth = getAuth(app);

const Sidebar = ({ open, setOpen }) => {
  const [user] = useAuthState(auth);

  return (
    <div
      className={`w-3/4 h-[300vh] bg-white shadow-lg absolute top-0 ${
        open ? `left-0` : `-left-full`
      } transition-all right-0 bottom-0 z-50 p-10 flex flex-col items-center`}
    >
      {user?.email ? (
        <>
          <div className="w-28 h-28 rounded-full overflow-hidden">
            {user?.photoURL ? (
              <img
                className="w-full h-full object-cover"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <img src={AvatarImage} alt="" />
            )}
          </div>
          <h5 className="text-2xl my-2 font-semibold text-neutral-600">
            {user?.displayName}
          </h5>
          <Link
            className="text-neutral-500 my-2 flex items-center"
            to="/inventory"
          >
            <MdInventory className="mr-2" /> Manage Items
          </Link>
          <Link
            className="text-neutral-500 my-2 flex items-center"
            to="/inventory/add-new-item"
          >
            <AiOutlinePlusCircle className="mr-2" /> Add Item
          </Link>
          <Link
            className="text-neutral-500 my-2 flex items-center"
            to="/my-items"
          >
            <BsCollectionFill className="mr-2" /> My Items
          </Link>
          <div
            className="cursor-pointer text-neutral-500 flex items-center"
            onClick={() => {
              signOut(auth);
              toast("User logout successfull.");
            }}
          >
            <FiLogOut className="mr-2" /> Logout
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl text-center font-medium">
            Please Sign In First
          </h2>
          <Link
            className="mt-20 bg-green-600/20 text-green-600 font-medium px-4 py-3 rounded"
            to="/login"
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;
