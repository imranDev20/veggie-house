import React from "react";
import { Link } from "react-router-dom";
import app from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const auth = getAuth(app);

const Menu = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav>
      <Link
        className="mx-2 px-2 py-2 text-lg text-neutral-600 hover:text-orange-500 transition-colors font-medium uppercase"
        to={`/`}
      >
        Home
      </Link>
      <Link
        className="mx-2 px-2 py-2 text-lg text-neutral-600 hover:text-orange-500 transition-colors font-medium uppercase"
        to={`/inventory`}
      >
        Inventory
      </Link>

      {user && (
        <Link
          className="mx-2 px-2 py-2 text-lg text-neutral-600 hover:text-orange-500 transition-colors font-medium uppercase"
          to={`/manage-items`}
        >
          Manage Items
        </Link>
      )}
      {user && (
        <Link
          className="mx-2 px-2 py-2 text-lg text-neutral-600 hover:text-orange-500 transition-colors font-medium uppercase"
          to={`/manage-items`}
        >
          Add Item
        </Link>
      )}
      {user && (
        <Link
          className="mx-2 px-2 py-2 text-lg text-neutral-600 hover:text-orange-500 transition-colors font-medium uppercase"
          to={`/manage-items`}
        >
          My items
        </Link>
      )}
      {!user && (
        <Link
          className="px-4 py-2 rounded bg-green-600/20 text-green-600 font-medium transition inline-flex items-center hover:bg-green-600 hover:text-white"
          to={`/login`}
        >
          Login
        </Link>
      )}
      {user && (
        <button
          onClick={() => {
            signOut(auth);
            toast("User logout successfull.");
          }}
          className="px-4 py-2 rounded bg-green-600/20 text-green-600 font-medium transition inline-flex items-center hover:bg-green-600 hover:text-white"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Menu;
