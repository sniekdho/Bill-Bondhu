import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BillCard from "../components/BillCard";
import { getStoredBill } from "../utils/localStorageBills";

const Bills = () => {
  const bills = useLoaderData();

  const storedBills = getStoredBill();

  const [selectedType, setSelectedType] = useState("all");

  const billsWithStatus = bills.map((bill) => {
    const isPaid = storedBills.find((storedBill) => storedBill.id === bill.id);
    return { ...bill, isPaid };
  });

  const billTypes = ["all"];
  for (let bill of bills) {
    if (!billTypes.includes(bill.bill_type)) {
      billTypes.push(bill.bill_type);
    }
  }

  const filteredBills =
    selectedType === "all"
      ? billsWithStatus
      : billsWithStatus.filter((bill) => bill.bill_type === selectedType);

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

      <div className="flex justify-center mt-6">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-md text-gray-700"
        >
          {billTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 p-6 max-w-5xl mx-auto">
        {filteredBills.length ? (
          filteredBills.map((bill) => <BillCard key={bill.id} bill={bill} />)
        ) : (
          <p className="text-center text-gray-500">No bills found.</p>
        )}
      </div>
    </div>
  );
};

export default Bills;
