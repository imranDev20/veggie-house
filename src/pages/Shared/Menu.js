import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const auth = getAuth(app);

const Menu = () => {
  const [user, loading, error] = useAuthState(auth);
  const [dropdown, setDropdown] = useState(false);

  console.log(user);
  console.log(dropdown);

  return (
    <nav className="flex items-center">
      <Link
        className="mx-2 px-2 py-2 text-lg text-neutral-600 hover:text-orange-500 transition-colors font-medium"
        to={`/`}
      >
        Home
      </Link>
      <Link
        className="mx-2 px-2 py-2 text-lg text-neutral-600 hover:text-orange-500 transition-colors font-medium"
        to={`/inventory`}
      >
        Inventory
      </Link>

      {user && (
        <button
          onClick={() => setDropdown(!dropdown)}
          className="w-10 h-10 mx-2 relative"
        >
          <img
            className="h-full w-full object-contain"
            src={user?.photoURL}
            alt=""
          />
          <div
            className={`${
              dropdown ? `flex` : `hidden`
            } absolute top-12 shadow-lg bg-white left-1/2 -translate-x-1/2 rounded-lg w-52 flex-col items-center py-3 border`}
          >
            <div className="w-16 h-16">
              <img
                className="h-full w-full object-contain"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <p className="py-2 font-semibold text-lg text-neutral-600">
              {user?.displayName}
            </p>

            <div className="flex flex-col items-start justify-start w-full">
              <Link
                className="text-neutral-500 block w-full hover:bg-neutral-100 py-2 px-3"
                to="/manage-items"
              >
                Manage Items
              </Link>
              <Link
                className=" text-neutral-500 block w-full hover:bg-neutral-100 py-2 px-3"
                to="/add-item"
              >
                Add Item
              </Link>
              <Link
                className="text-neutral-500 block w-full hover:bg-neutral-100 py-2 px-3"
                to="/my-items"
              >
                My Items
              </Link>
              <button
                className="text-neutral-500 block w-full hover:bg-neutral-100 py-2 px-3"
                onClick={() => {
                  signOut(auth);
                  toast("User logout successfull.");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </button>
      )}

      {!user && (
        <Link
          className="px-4 py-2 rounded bg-green-600/20 text-green-600 font-medium transition inline-flex items-center hover:bg-green-600 hover:text-white"
          to={`/login`}
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Menu;
