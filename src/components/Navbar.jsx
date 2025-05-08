import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../public/invoice.png";
import { AuthContext } from "../contexts/AuthContext";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const { user, loading } = use(AuthContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = (
    <>
      <li className="mr-2.5 font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white px-3 py-1 rounded" : "px-3 py-1"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="mr-2.5 font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white px-3 py-1 rounded" : "px-3 py-1"
          }
          to="/bills"
        >
          Bills
        </NavLink>
      </li>
      <li className="mr-2.5 font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white px-3 py-1 rounded" : "px-3 py-1"
          }
          to="/profile"
        >
          Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-300 shadow-sm fixed top-0 z-50">
      <div className="navbar-start">
        <div className="relative lg:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 w-48 bg-base-100 text-base-content rounded-box shadow-lg z-50 p-2 space-y-2.5">
              <li className="font-bold">
                <NavLink
                  to="/"
                  onClick={() => setIsDropdownOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-primary text-white px-3 py-1 rounded"
                      : "px-3 py-1 hover:bg-gray-300 hover:rounded"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink
                  to="/bills"
                  onClick={() => setIsDropdownOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-primary text-white px-3 py-1 rounded"
                      : "px-3 py-1 hover:bg-gray-300 hover:rounded"
                  }
                >
                  Bills
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink
                  to="/profile"
                  onClick={() => setIsDropdownOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-primary text-white px-3 py-1 rounded"
                      : "px-3 py-1 hover:bg-gray-300 hover:rounded"
                  }
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <Link
          to="/"
          className="flex items-center text-xl font-extrabold cursor-pointer"
        >
          <img
            src={logo}
            alt="logo"
            className="hidden md:inline-block w-8 h-8 mr-2"
          />
          PayBondhu
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {!loading && user ? (
          <UserMenu />
        ) : !loading ? (
          <>
            <Link
              to="/auth/login"
              className="btn bg-secondary text-white font-semibold"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn bg-secondary text-white font-semibold"
            >
              Register
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
