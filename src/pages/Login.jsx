import React, { use, useState } from "react";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { setUser, signInUser, googleSignInUser } = use(AuthContext);
  const [showEye, setShowEye] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state || "/");
        toast("✅ Login Successful! Welcome, " + " 🎉");
      })
      .catch((error) => {
        toast(`Login failed: ${error.message}`);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignInUser()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state || "/");
        toast("✅ Login Successful! Welcome, " + " 🎉");
      })
      .catch((error) => {
        toast(`Login failed: ${error.message}`);
      });
  };

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-accent">
          Welcome Back!
        </h1>
        <p className="text-center max-w-3xl mx-auto text-base md:text-lg text-gray-600">
          Log in to access your dashboard, manage your account, and continue
          where you left off. We're glad to see you again!
        </p>
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl border border-indigo-100">
          <div className="card-body p-8 space-y-4">
            <h1 className="text-3xl font-bold text-center text-primary mb-2">
              Login
            </h1>
            <p className="text-sm text-center text-gray-500 mb-4">
              Login to your account to manage and pay your bills.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
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
                    autoComplete="true"
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

              <div className="flex justify-between items-center">
                <Link
                  // to="/forgot-password"
                  className="text-sm text-indigo-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button className="btn btn-accent text-white w-full mt-2">
                Login
              </button>
            </form>

            <div className="divider">OR</div>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full"
            >
              Continue with Google
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-indigo-600 underline font-medium"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
