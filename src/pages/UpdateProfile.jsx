import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, setUser, updateUserProfile } = use(AuthContext);
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoUrl(user.photoURL || "");
    }
  }, [user]);

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    updateUserProfile({ displayName: name, photoURL: photoUrl })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoUrl });
        toast.success("Profile updated successfully");
        navigate("/profile");
      })
      .catch((error) => {
        toast.error("Failed to update profile: " + error.message);
      });
  };

  return (
    <div className="mt-16">
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">
            Update Profile
          </h2>

          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div>
              <label className="label text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-accent w-full text-white">
              Update Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
