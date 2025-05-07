import React from "react";
import choice from "../assets/images/choice.png";
import confirm from "../assets/images/confirmation.png";
import pay from "../assets/images/pay.png";

const HowItWorks = () => {
  return (
    <section className="py-10 bg-base-300">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-accent mb-6">
          How to Pay Your Bills?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Paying your bills has never been easier. Our platform allows you to
          select your bill, confirm the details, and securely pay using your
          balance. Here’s a step-by-step guide on how to get started.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <img src={choice} alt="Step 1" className="h-16 mx-auto mb-4" />
            <h4 className="text-lg font-semibold">1. Select Bill</h4>
            <p>Choose the type of utility bill you want to pay.</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <img src={confirm} alt="Step 2" className="h-16 mx-auto mb-4" />
            <h4 className="text-lg font-semibold">2. Confirm Details</h4>
            <p>Review bill details and confirm.</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <img src={pay} alt="Step 3" className="h-16 mx-auto mb-4" />
            <h4 className="text-lg font-semibold">3. Pay Securely</h4>
            <p>Complete payment using your balance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
