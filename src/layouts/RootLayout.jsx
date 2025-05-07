import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="bg-gray-100">
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
