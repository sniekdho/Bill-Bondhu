import React from "react";
import Lottie from "lottie-react";
import animationSecure from "../assets/animations/Animation-secure.json";
import animationFast from "../assets/animations/Animation-fast.json";
import animationFriendly from "../assets/animations/Animation-friendly.json";

const Features = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-accent mb-6">
          Why Use Our PayBondhu Service?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our PayBondhu service is designed to provide a seamless and secure way
          for you to manage and pay your utility bills from the comfort of your
          home. With fast and easy access to various payment options, you can
          save time and avoid late fees.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="h-32 mx-auto flex justify-center items-center">
              <Lottie
                animationData={animationSecure}
                style={{ height: "100%" }}
              />
            </div>
            <h3 className="text-xl font-semibold">Secure</h3>
            <p>All your payments are encrypted and safe.</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="h-32 mx-auto flex justify-center items-center">
              <Lottie
                animationData={animationFast}
                style={{ height: "100%" }}
              />
            </div>
            <h3 className="text-xl font-semibold">Fast</h3>
            <p>Pay any utility bill within seconds.</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="h-32 mx-auto flex justify-center items-center">
              <Lottie
                animationData={animationFriendly}
                style={{ height: "100%" }}
              />
            </div>
            <h3 className="text-xl font-semibold">User Friendly</h3>
            <p>Simple interface anyone can use.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
