import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="mt-16 py-10 bg-gradient-to-br from-indigo-50 to-white">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
