import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";

const ManageRegisteredCamps = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: menage_camps,
    refetch,
    loading,
  } = useQuery({
    queryKey: ["campsData"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/manage-registered-camps`);
      return data;
    },
  });
  if (loading) return <LoadingSpinner />;

  const handleStatus = async (newStatus, id) => {
    try {
      const { data: res } = await axiosSecure.patch(
        `/update-participant-status/${id}`,
        { participantStatus: newStatus }
      );
      refetch();
      if (res.modifiedCount > 0) {
        toast.success("Participant status updated successfully!👍👍👍");
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="lg:mx-14 mt-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Manage Registered Camps
      </h1>
      <div className="overflow-x-auto">
        <Table striped>
          <TableHead className="border text-center">
            <TableHeadCell className="border">Camp Name</TableHeadCell>
            <TableHeadCell className="border">Participant Name</TableHeadCell>
            <TableHeadCell className="border">Camp Fees</TableHeadCell>
            <TableHeadCell className="border">Payment Status</TableHeadCell>
            <TableHeadCell className="border">
              Confirmation Status
            </TableHeadCell>
            <TableHeadCell className="border">Action</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y text-center">
            {menage_camps?.map((camp) => (
              <TableRow
                key={camp?._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="border whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {camp?.campName}
                </TableCell>
                <TableCell className="border">
                  {camp?.participantName}
                </TableCell>
                <TableCell className="border">{camp?.fees}</TableCell>
                <TableCell className="border">Payment Status</TableCell>

                <TableCell className="border">
                  <div className="flex items-center gap-2">
                    <select
                      required
                      className="p-1 border-none rounded-md text-gray-900 whitespace-no-wrap bg-white"
                      name="category"
                      defaultValue={camp?.participantStatus}
                      onChange={(e) => handleStatus(e.target.value, camp?._id)}
                    >
                      <option value="pending">Pending</option>
                      <option value="Confirm">Confirm</option>
                    </select>
                  </div>
                </TableCell>

                <TableCell className="text-3xl border">
                  <p className="flex justify-center items-center hover:text-red-400 hover:scale-110 duration-700">
                    <MdDeleteOutline />
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageRegisteredCamps;
