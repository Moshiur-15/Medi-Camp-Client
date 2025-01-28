import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tooltip,
} from "flowbite-react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
import Payment from "../../Components/Dashboard/Payment";
import { useState } from "react";
import { FeedbackModal } from "../../Components/Dashboard/FeedbackModal ";
import useAuth from "../../Hook/useAuth";

export default function RegisteredCamps() {
  const [openModal, setOpenModal] = useState(false);
  const [paymentData, setPaymentData] = useState([]);
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [feedbackData, setFeedbackData] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: registerData,
    Loading,
    refetch,
  } = useQuery({
    queryKey: ["registered-camps"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/registered-camps/${user?.email}`);
      return data;
    },
  });
  if (Loading) return <LoadingSpinner />;

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

  // handleData
  const handleData = async (id) => {
    setOpenModal(true);
    try {
      const { data } = await axiosSecure.get(`/registered-camps-payment/${id}`);
      setPaymentData(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="overflow-x-auto lg:mx-14">
      <h2 className="font-merriweather font-bold text-center my-5 text-xl md:text-3xl mb-10">
        Registered Camps
      </h2>
      <Table striped className="border text-center">
        <TableHead className="border">
          <TableHeadCell>Camp Name</TableHeadCell>
          <TableHeadCell>Camp Fees</TableHeadCell>
          <TableHeadCell>Participant Name</TableHeadCell>
          <TableHeadCell>Payment Status</TableHeadCell>
          <TableHeadCell>Confirmation Status</TableHeadCell>
          <TableHeadCell>Action</TableHeadCell>
          <TableHeadCell>FeedBack</TableHeadCell>
        </TableHead>
        {registerData?.map((data) => (
          <TableBody className="divide-y" key={data._id}>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50">
              <TableCell className="border whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {data.campName}
              </TableCell>
              <TableCell className="border">{data.fees}</TableCell>
              <TableCell className="border">{data.participantName}</TableCell>
              <TableCell className="border">
                <button
                  disabled={data.PaymentStatus === "paid"}
                  onClick={() => handleData(data?._id)}
                  className={`${
                    data.PaymentStatus === "paid"
                      ? "cursor-not-allowed bg-blue-300 "
                      : "bg-blue-500"
                  } rounded text-white px-3 py-1`}
                >
                  {data.PaymentStatus === "paid" ? "paid" : "pay"}
                </button>
              </TableCell>
              <TableCell className="border">{data.participantStatus}</TableCell>
              <TableCell className="text-3xl border">
                <button
                  disabled={data?.participantStatus === "confirm"}
                  onClick={() => handleDelate(data?._id)}
                  className={`duration-700 mx-auto ${
                    data?.participantStatus === "confirm"
                      ? "text-gray-400 cursor-not-allowed"
                      : "hover:text-red-400 hover:scale-110"
                  }`}
                >
                  <MdDeleteOutline />
                </button>
              </TableCell>
              <TableCell className="border">
                <button
                  className={`${
                    data.PaymentStatus === "paid" &&
                    data?.participantStatus === "confirm" &&
                    "px-5 py-1 bg-blue-500 text-white rounded-md"
                  }`}
                  onClick={() => {
                    if (
                      data.PaymentStatus === "paid" &&
                      data?.participantStatus === "confirm"
                    ) {
                      setFeedbackData(data);
                      setOpenFeedbackModal(true);
                    }
                  }}
                >
                  {data.PaymentStatus === "paid" &&
                  data?.participantStatus === "confirm"
                    ? "Feedback "
                    : "N/A"}
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>

      {/* FeedbackModal  modal */}
      {openFeedbackModal && feedbackData && (
        <FeedbackModal
          openModal={openFeedbackModal}
          setOpenModal={setOpenFeedbackModal}
          feedbackData={feedbackData}
        />
      )}

      {/* Modal */}
      {paymentData?.map((data) => (
        <Payment
          key={data._id}
          setOpenModal={setOpenModal}
          data={data}
          openModal={openModal}
          refetch={refetch}
        />
      ))}
    </div>
  );
}
