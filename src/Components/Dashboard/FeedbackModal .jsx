import { Modal } from "flowbite-react";
import { useState } from "react";
import { FaCampground, FaUserAlt } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";

export const FeedbackModal = ({ openModal, setOpenModal, feedbackData }) => {
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setValue("rating", newRating);
  };

  const onSubmit = async (data) => {
    const feedback = data?.feedback;
    const rating = data?.rating;
    const name = feedbackData?.participantName;
    const campName = feedbackData?.campName;
    const image = user?.photoURL;
    const savedData = { feedback, rating, name, campName, image };
    try {
      const { data } = await axiosSecure.post("/feedback-data", savedData);
      if (data?.insertedId) {
        toast.success("Feedback submitted successfully!");
        setOpenModal(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="xl">
      <Modal.Header>Feedback for {feedbackData?.participantName}</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="flex items-center">
              <FaCampground className="mr-2" />
              {feedbackData?.campName}
            </p>
            <p className="flex items-center">
              <FaUserAlt className="mr-2 " />
              {feedbackData?.participantName}
            </p>

            <div className="my-2">
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                changeRating={handleRatingChange}
                numberOfStars={5}
                name="rating"
                starDimension="25px"
                starSpacing="5px"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Write feedback..."
              {...register("feedback", { 
                required: true,
                minLength: { value: 100, message: "Feedback must be at least 100 characters long." },
                maxLength: { value: 150, message: "Feedback must be less than 150 characters." }
              })}
              className="w-full p-2 bg-gray-200/90 border-none rounded mt-2 ring-0 focus:border-gray-200"
            ></textarea>
            {errors.feedback && <p className="text-red-400">{errors.feedback.message}</p>}
          </div>

          <Modal.Footer>
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="bg-gray-500 text-white rounded px-4 py-2"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2"
            >
              Submit Feedback
            </button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};
