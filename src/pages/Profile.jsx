import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";

const Profile = () => {
  const { user } = use(AuthContext);
  const { displayName, photoURL, email } = user || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center p-6">
      <div className="card w-full max-w-md shadow-2xl bg-white border border-indigo-200 rounded-2xl">
        <div className="card-body items-center text-center p-8">
          <div className="avatar mb-4">
            <div className="w-24 rounded-full ring ring-indigo-500 ring-offset-base-100 ring-offset-2">
              <img src={photoURL} alt="Profile" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{displayName}</h2>
          <p className="text-sm text-gray-500 mb-4">{email}</p>

          <Link
            to="/update-profile"
            className="mt-6 btn btn-accent text-white w-full"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
