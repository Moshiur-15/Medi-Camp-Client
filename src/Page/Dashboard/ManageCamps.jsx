import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import UpdateCampModal from "../../Components/Dashboard/UpdateCampModal";

export function ManageCamps() {
  const axiosSecure = useAxiosSecure();
  const [open, setOpen] = useState(false);
  const [unique_camp, setUniqueCamp] = useState([]);
  const {
    data: camps,
    refetch,
    loading,
  } = useQuery({
    queryKey: ["campsData"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/camps`);
      return data;
    },
  });

  if (loading) return <LoadingSpinner />;

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
                const { data } = await axiosSecure.delete(`/delete-camp/${id}`);
                console.log(data);

                if (data.deletedCount > 0) {
                  refetch();
                  toast.success("Camp deleted successfully!");
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

  //   handle update
  const handleUpdate = async (id) => {
    try {
      const { data: unique_camp } = await axiosSecure.get(`/unique-camp/${id}`);
      setUniqueCamp(unique_camp);
      setOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="lg:mx-14 mt-4">
      <h2 className="font-merriweather font-bold text-center my-5 text-xl md:text-3xl">
        Manage Camps
      </h2>
      <div className="overflow-x-auto">
        <Table hoverable className="text-center">
          <TableHead className="border">
            <TableHeadCell>Camp name</TableHeadCell>
            <TableHeadCell className="border">Location</TableHeadCell>
            <TableHeadCell>Professional</TableHeadCell>
            <TableHeadCell className="border">Date</TableHeadCell>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell className="border">Action</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y border">
            {camps
              .reverse()
              .map((camp) => (
                <TableRow
                  key={camp?._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 border">
                    {camp?.campName}
                  </TableCell>
                  <TableCell className="">{camp?.location}</TableCell>
                  <TableCell className="border">
                    {camp?.healthcareProfessional?.specialization}
                  </TableCell>
                  <TableCell className="">{camp?.date}</TableCell>
                  <TableCell className="border">
                    {camp?.time?.startTime} - {camp?.time?.endTime}
                  </TableCell>
                  <TableCell className="flex items-center justify-around translate-y-1/2 lg:translate-y-0 text-xl">
                    <button
                      onClick={() => handleUpdate(camp?._id)}
                      className="hover:text-blue-500/70 hover:scale-110 duration-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelate(camp?._id)}
                      className="hover:text-red-500/70 hover:scale-110 duration-700"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <UpdateCampModal
        unique_camp={unique_camp}
        refetch={refetch}
        setOpen={setOpen}
        open={open}
        loading={loading}
      />
    </section>
  );
}
