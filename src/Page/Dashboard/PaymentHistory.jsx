import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner";
import {
  Table,
  TableCell,
  TableHeadCell,
  TableHead,
  TableRow,
  TableBody,
} from "flowbite-react";
const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payment_data, isLOading } = useQuery({
    queryKey: ["payment-history", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/get-payment-history/${user?.email}`);
      return data;
    },
  });
  if (isLOading) return <LoadingSpinner />;
  console.log(payment_data);
  return (
    <div className="overflow-x-auto lg:mx-14">
      <h2 className="font-merriweather font-bold text-center my-2 text-xl md:text-3xl ">Payment History</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl text-center mx-auto mb-10">
        Here you can view your past payment records, including camp fees, payment status, and confirmation details.
      </p>
      {payment_data?.length === 0 ? (
        <p className="text-center text-red-500 text-3xl border md:py-32 py-8">
           Payment data not available
        </p>
      ) : (
        <Table striped className="border text-center">
          <TableHead className="border">
            <TableHeadCell>Camp Name</TableHeadCell>
            <TableHeadCell>Camp Fees</TableHeadCell>
            <TableHeadCell>Payment Status</TableHeadCell>
            <TableHeadCell>Confirmation Status</TableHeadCell>
            <TableHeadCell>Transition</TableHeadCell>
          </TableHead>
          {payment_data?.map((data) => (
            <TableBody className="divide-y" key={data._id}>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50">
                <TableCell className="border whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {data.campName}
                </TableCell>
                <TableCell className="border">{data.fees}</TableCell>
                <TableCell className="border">{data.PaymentStatus}</TableCell>
                <TableCell className="border">
                  {data.participantStatus}
                </TableCell>
                <TableCell className="border">{data.transition_id}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      )}
    </div>
  );
};

export default PaymentHistory;
