import React from "react";

const PaymentHistory = () => {
  const paymentData = [
    {
      campName: "Tech Camp 2025",
      fees: "$150",
      paymentStatus: "paid",
      confirmationStatus: "confirm",
    },
    {
      campName: "Coding Bootcamp",
      fees: "$200",
      paymentStatus: "pending",
      confirmationStatus: "waitlist",
    },
    {
      campName: "AI Workshop",
      fees: "$120",
      paymentStatus: "paid",
      confirmationStatus: "confirm",
    },
  ];

  return (
    <div className="payment-history text-center">
      <h2 className="text-xl font-semibold mb-4">Payment History</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2 font-merriweather">Camp Name</th>
            <th className="border p-2 font-merriweather">Fees</th>
            <th className="border p-2 font-merriweather">Payment Status</th>
            <th className="border p-2 font-merriweather">Confirmation Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentData?.map((data, index) => (
            <tr key={index}>
              <td className="border p-2">{data.campName}</td>
              <td className="border p-2">{data.fees}</td>
              <td
                className={`border p-2 font-semibold ${
                  data.paymentStatus === "paid" ? "text-green-400" : "text-red-400"
                }`}
              >
                {data.paymentStatus}
              </td>
              <td
                className={`border p-2 ${
                  data.confirmationStatus === "confirm"
                    ? "bg-blue-100"
                    : "bg-gray-100"
                }`}
              >
                {data.confirmationStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
