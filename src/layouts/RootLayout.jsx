import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

const RootLayout = () => {
  const { state } = useNavigation();

  return (
    <div className="bg-gray-100">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen[calc(100vh-348px)]">
        {state == "loading" ? <Spinner></Spinner> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
