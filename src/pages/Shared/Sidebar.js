import React from "react";
import app from "../../firebase";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

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
            <img
              className="w-full h-full object-cover"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <h5 className="text-2xl my-2 font-semibold text-neutral-600">
            {user?.displayName}
          </h5>
          <Link className="text-neutral-500 my-2" to="/inventory">
            Manage Items
          </Link>
          <Link className="text-neutral-500 my-2" to="/inventory/add-new-item">
            Add Item
          </Link>
          <Link className="text-neutral-500 my-2" to="/my-items">
            My Items
          </Link>
          <div
            className="cursor-pointer text-neutral-500"
            onClick={() => {
              signOut(auth);
              toast("User logout successfull.");
            }}
          >
            Logout
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
