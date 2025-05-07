import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import BillDetailsCard from "../components/BillDetailsCard";

const BillDetails = () => {
  const { id } = useParams();
  const bills = useLoaderData();

  const [singleBill, setSingleBill] = useState({});

  useEffect(() => {
    const specificBill = bills.find((bill) => bill.id === parseInt(id));
    setSingleBill(specificBill);
  }, [id, bills]);

  return (
    <div className="mt-16 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-accent">
        Review and Confirm Your Bill Payment
      </h1>
      <p className="text-center max-w-3xl mx-auto text-base md:text-lg text-gray-600 mb-6">
        Before proceeding, please verify your bill details below. Our secure
        system ensures fast and safe transactions for all your utility payments.
      </p>
      <div>
        <BillDetailsCard singleBill={singleBill}></BillDetailsCard>
      </div>
    </div>
  );
};

export default BillDetails;
