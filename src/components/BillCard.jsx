import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";

const BillCard = ({ bill }) => {
  const { id, bill_type, icon, organization, "due-date": dueDate } = bill || {};

  return (
    <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between">
      {/* Left: Icon */}
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt={bill_type}
          className="w-16 h-16 object-contain rounded-full border p-2"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{organization}</h2>
          <p className="text-sm text-gray-500 capitalize">{bill_type} Bill</p>
        </div>
      </div>

      {/* Right: Details */}
      <div className="text-center sm:text-right mt-4 sm:mt-0 sm:ml-4">
        <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
          <FaRegCalendarAlt className="text-gray-400" />
          {new Date(dueDate).toLocaleDateString()}
        </p>
        <Link to={`/bill/${id}`}>
          <button className="mt-2 bg-secondary text-white font-medium py-1.5 px-4 rounded-lg cursor-pointer">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BillCard;
