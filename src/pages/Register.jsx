import React, { useState } from "react";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { Link } from "react-router";

const Register = () => {
  const [showEye, setShowEye] = useState(false);

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-accent">
          Create Your PayBondhu Account
        </h1>
        <p className="text-center max-w-3xl mx-auto text-base md:text-lg text-gray-600">
          Join PayBondhu and experience fast, secure, and easy payment services.
        </p>
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl border border-indigo-100">
          <div className="card-body p-8 space-y-4">
            <h1 className="text-3xl font-bold text-center text-primary mb-2">
              Create Your Account
            </h1>
            <p className="text-sm text-center text-gray-500 mb-4">
              Join our bill management system and pay with ease.
            </p>

            <form className="space-y-4">
              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  className="input input-bordered w-full"
                  placeholder="Profile Photo URL"
                />
              </div>

              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Email address"
                  required
                />
              </div>

              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showEye ? "text" : "password"}
                    name="password"
                    className="input input-bordered w-full pr-10"
                    placeholder="Password"
                    required
                  />
                  <div
                    onClick={() => setShowEye(!showEye)}
                    className="absolute top-2.5 right-3 cursor-pointer text-gray-500 z-50"
                  >
                    {showEye ? (
                      <IoMdEye size={20} />
                    ) : (
                      <IoIosEyeOff size={20} />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox checkbox-sm"
                  required
                />
                <span className="text-sm text-gray-600">
                  I accept the{" "}
                  <span className="text-indigo-500 underline">
                    terms and conditions
                  </span>
                </span>
              </div>

              <button className="btn btn-accent text-white w-full mt-2">
                Sign Up
              </button>
            </form>

            <div className="divider">OR</div>

            <button className="btn btn-outline w-full">
              Sign Up with Google
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-indigo-600 underline font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
