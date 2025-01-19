import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import { imgUp } from "../../api/Utils";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
const AddCamp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const healthcareProfessional = {
        specialization: data.specialization,
        name: data.healthcareProfessionalName,
      };
      const time = {
        startTime: data.startTime,
        endTime: data.endTime,
      };
      const fees = parseInt(data.feesData);
      if (isNaN(fees) || fees <= 0) {
        toast.error("Please enter a valid positive fee amount.");
        return;
      }
      const img = data.image[0];
      const image = await imgUp(img);

      const addData = {
        fees,
        campName: data.campName,
        location: data.location,
        date: data.date,
        time,
        description: data.description,
        healthcareProfessional,
        createdBy: user?.email,
        participantCount: 0,
        image,
      };

      const { data: res } = await axiosSecure.post(`/add-camp`, addData);
      console.log(res);
      if (res.insertedId) {
        toast.success("Camp Added Successfully!👍👍👍");
        reset();
      }
    } catch (error) {
      console.error("Error adding camp:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add a new Camp</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Camp Name
            </label>
            <input
              placeholder="Camp Name"
              className="bg-gray-200 w-full p-2 rounded-sm"
              {...register("campName", { required: "Camp Name is required" })}
            />
            {errors.campName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.campName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              placeholder="Ex: Dhaka, Bangladesh"
              className="bg-gray-200 w-full p-2 rounded-sm"
              {...register("location", { required: "Location is required" })}
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Healthcare Professional Name
            </label>
            <input
              {...register("healthcareProfessionalName", {
                required: "Healthcare Professional Name is required",
              })}
              placeholder="Dr.Name"
              className="bg-gray-200 w-full p-2 rounded-sm"
            />
            {errors.healthcareProfessionalName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.healthcareProfessionalName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Healthcare Professional Specialization
            </label>
            <input
              {...register("specialization", {
                required: "Specialization is required",
              })}
              placeholder="Ex: Cardiologist"
              className="bg-gray-200 w-full p-2 rounded-sm"
            />
            {errors.specialization && (
              <p className="text-red-500 text-sm mt-1">
                {errors.specialization.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Camp Fee
            </label>
            <input
              type="number"
              {...register("feesData", {
                required: "Fees is required",
                validate: (value) =>
                  value > 0 || "Fees must be a positive number",
              })}
              placeholder="Camp Fees"
              className="bg-gray-200 w-full p-2 rounded-sm border-none"
            />
            {errors.feesData && (
              <p className="text-red-500 text-sm mt-1">
                {errors.feesData.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Camp Date
            </label>
            <input
              type="date"
              {...register("date", { required: "Camp Date is required" })}
              className="bg-gray-200 w-full p-2 rounded-sm border-none"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Time
            </label>
            <input
              {...register("startTime", { required: "Time is required" })}
              placeholder="Ex: 10:00 AM "
              className="bg-gray-200 w-full p-2 rounded-sm border-none"
              type="time"
            />
            {errors.startTime && (
              <p className="text-red-500 text-sm mt-1">
                {errors.startTime.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Time
            </label>
            <input
              {...register("endTime", { required: "Time is required" })}
              placeholder="Ex: 10:00 AM - 2:00 PM"
              className="bg-gray-200 w-full p-2 rounded-sm border-none"
              type="time"
            />
            {errors.endTime && (
              <p className="text-red-500 text-sm mt-1">
                {errors.endTime.message}
              </p>
            )}
          </div>
        </div>

        {/* img */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Photo
          </label>
          <input
            type="file"
            className="block w-full border bg-gray-200"
            {...register("image", { required: "image is required" })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Row 5 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 100,
                message: "Description must be at least 100 characters",
              },
            })}
            placeholder="Write about the camp."
            rows={6}
            className="bg-gray-200 w-full p-2 rounded-sm border-none"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-800"
        >
          <span className="text-xl mr-1">
            <IoMdAdd />
          </span>
          <span>Add Camp</span>
        </button>
      </form>
    </div>
  );
};

export default AddCamp;
