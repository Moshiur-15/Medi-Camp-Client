import React, { useState } from "react";
import {
  Pagination,
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
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;

  // ?page=${currentPage}&limit=${itemsPerPage}

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
        toast.success("Participant status updated successfully!👍");
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(menage_camps);

  const handleDelate = async (id) => {
    toast((t) => (
      <div className="flex items-center gap-3">
        <p className="text-lg font-medium text-gray-700">Are you sure?</p>
        <div className="flex justify-between items-center gap-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                const { data } = await axiosSecure.delete(
                  `/delete-registered-camps/${id}`
                );
                console.log(data);
                if (data.deletedCount > 0) {
                  refetch();
                  toast.success("Participant deleted successfully!👍");
                }
              } catch (err) {
                console.error(err);
              }
            }}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  // const totalPages = Math.ceil(menage_camps?.total / itemsPerPage);
  // console.log(totalPages);

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
          {menage_camps?.length === 0 ? (
            <p className="text-center text-3xl text-red-500 py-4">
              No registered camps found.
            </p>
          ) : (
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
                  <TableCell className="border">
                    {camp?.PaymentStatus}
                  </TableCell>

                  <TableCell className="border">
                    <div className="flex items-center gap-2">
                      <select
                        required
                        className="p-1 border-none rounded-md text-gray-900 whitespace-no-wrap bg-white"
                        name="category"
                        defaultValue={camp?.participantStatus}
                        onChange={(e) =>
                          handleStatus(
                            e.target.value,
                            camp?._id,
                          )
                        }
                      >
                        <option value="pending">Pending</option>
                        <option value="confirm">Confirm</option>
                      </select>
                    </div>
                  </TableCell>

                  <TableCell className="text-3xl border">
                    <button
                      disabled={camp?.participantStatus === "confirm"}
                      onClick={() => handleDelate(camp?._id)}
                      className={`flex justify-center items-center duration-700 ${
                        camp?.participantStatus === "confirm"
                          ? "text-gray-400 cursor-not-allowed"
                          : "hover:text-red-400 hover:scale-110"
                      }`}
                    >
                      <MdDeleteOutline />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
      {/* <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          layout="navigation"
          showIcons
          disabled={totalPages <= 1}
        />
      </div> */}
    </div>
  );
};

export default ManageRegisteredCamps;
