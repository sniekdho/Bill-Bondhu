import React from "react";

const BillDetailsCard = ({ singleBill }) => {
  const {
    icon,
    bill_type,
    organization,
    amount,
    "due-date": dueDate,
  } = singleBill || {};

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center  gap-6 w-full max-w-4xl mx-auto">
      {/* Left: Organization Icon */}
      <div className="flex-shrink-0">
        <img
          src={icon}
          alt={bill_type}
          className="w-24 h-24 md:w-28 md:h-28 object-contain border border-gray-200 rounded-full p-2"
        />
      </div>

      {/* Right: Bill Info */}
      <div className="flex-1 space-y-3 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          {organization}
        </h2>
        <p className="text-gray-600 capitalize">
          <span className="font-medium">Bill Type:</span> {bill_type}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Amount Due:</span>{" "}
          <span className="text-indigo-600 font-bold">৳ {amount}</span>
        </p>
        <p className="text-gray-500">
          <span className="font-medium">Due Date:</span>{" "}
          {new Date(dueDate).toLocaleDateString()}
        </p>
        <div className="pt-3">
          <button className="bg-secondary text-white font-medium py-2 px-5 rounded-lg transition duration-300 w-full md:w-auto">
            Pay Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillDetailsCard;
