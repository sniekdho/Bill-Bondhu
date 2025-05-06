import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <header>I am Header</header>
      <main>
        <h1>This is main or center</h1>
        <Outlet></Outlet>
      </main>
      <footer>Always at the bottom</footer>
    </div>
  );
};

export default RootLayout;
