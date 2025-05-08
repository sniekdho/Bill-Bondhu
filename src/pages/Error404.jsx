import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import Navbar from "../components/Navbar";
import error404 from "../assets/animations/Animation-error.json";

const Error404 = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <div className="w-full h-96 flex justify-center items-center">
          <Lottie animationData={error404} className="h-full" />
        </div>

        <h1 className="text-3xl font-extrabold text-red-500 mt-6">
          Page Not Found
        </h1>
        <p className="text-black font-medium mt-2 max-w-md">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link to="/" className="mt-6">
          <button
            className="bg-accent cursor-pointer text-white font-semibold px-6 py-3 rounded-lg"
            aria-label="Go back to homepage"
          >
            Go Back Home
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Error404;
