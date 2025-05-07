import React from "react";
import { useLoaderData } from "react-router";
import BillCard from "../components/BillCard";

const Bills = () => {
  const bills = useLoaderData();

  return (
    <div className="mt-16 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-accent">
        All Your Bills in One Place
      </h1>
      <p className="text-center max-w-3xl mx-auto text-base md:text-lg text-gray-600">
        Manage and pay your utility bills—electricity, gas, water, internet, and
        more—from a single, secure platform. With PayBondhu, forget the hassle
        of multiple apps and payment methods. Enjoy a streamlined experience
        with real-time updates, payment history, and instant confirmations.
      </p>
      <div className="grid gap-6 p-6 max-w-5xl mx-auto">
        {bills.map((bill) => (
          <BillCard key={bill.id} bill={bill}></BillCard>
        ))}
      </div>
    </div>
  );
};

export default Bills;
