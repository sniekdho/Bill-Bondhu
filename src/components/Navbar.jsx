import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../public/invoice.png";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        toast("Sign Out Successfully");
      })
      .catch((error) => {
        toast(`${error.message}`);
      });
  };

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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="flex items-center text-xl font-extrabold cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="hidden md:inline-block w-8 h-8 mr-2"
          />
          PayBondhu
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <Link
            onClick={handleSignout}
            to="/auth/login"
            className="btn bg-secondary"
          >
            Log Out
          </Link>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
