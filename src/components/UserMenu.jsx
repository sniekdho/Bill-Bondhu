import React, { use, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const UserMenu = () => {
  const { user, signOutUser } = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        toast("Sign Out Successfully");
      })
      .catch((error) => {
        toast(`${error.message}`);
      });
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-secondary cursor-pointer"
      >
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border border-gray-300 p-0.5"
          />
        ) : (
          <FaUserCircle size={40} className="text-secondary" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="px-4 py-3">
            <p className="font-semibold text-gray-800">{user.displayName}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <hr className="border-0.5 border-dashed border-base-300" />
          <div className="px-4 py-2">
            <p className="text-sm text-gray-600">
              Current Balance:{" "}
              <span className="font-semibold text-green-600">
                ৳ {user.balance}
              </span>
            </p>
          </div>
          <div className="px-4 py-2">
            <button
              onClick={handleSignout}
              className="w-full text-center cursor-pointer hover:bg-accent text-white font-medium bg-secondary rounded-md py-1"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
