import toast from "react-hot-toast";

const getStoredBill = () => {
  const storedBill = localStorage.getItem("billsList");

  if (storedBill) {
    return JSON.parse(storedBill);
  } else {
    return [];
  }
};

const addBillToLS = (singleBill) => {
  const storedBill = getStoredBill();
  const isExist = storedBill.find((bill) => bill.id === singleBill.id);

  if (isExist) {
    toast.error("Already paid the bill");
    return false;
  } else {
    storedBill.push(singleBill);
    localStorage.setItem("billsList", JSON.stringify(storedBill));
    toast.success("Bill paid successfully");
    return true;
  }
};

export { getStoredBill, addBillToLS };
