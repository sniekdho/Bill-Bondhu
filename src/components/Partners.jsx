import React from "react";
import dbbl from "../assets/banks/dbbl.png";
import brac from "../assets/banks/brac.png";
import bkash from "../assets/banks/bkash.png";
import nagad from "../assets/banks/nagad.png";

const Partners = () => {
  return (
    <section className="py-10 bg-base-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-accent mb-6">
          Our Banking & Service Partners
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We partner with trusted banks and utility organizations to provide you
          with a seamless payment experience. You can pay your bills using the
          following banks and service providers:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          <img src={dbbl} alt="DBBL" className="h-14 mx-auto" />
          <img src={brac} alt="BRAC Bank" className="h-14 mx-auto" />
          <img src={bkash} alt="Bkash" className="h-14 mx-auto" />
          <img src={nagad} alt="Nagad" className="h-14 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
