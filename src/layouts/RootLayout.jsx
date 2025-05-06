import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <h1>This is main or center</h1>
        <Outlet></Outlet>
      </main>
      <footer>Always at the bottom</footer>
    </div>
  );
};

export default RootLayout;
