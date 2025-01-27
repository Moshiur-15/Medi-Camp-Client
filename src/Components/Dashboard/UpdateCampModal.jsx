import toast from "react-hot-toast";
import { Modal, Button, TextInput, Label, Radio } from "flowbite-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { imgUp } from "../../api/Utils";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useState } from "react";

const UpdateCampModal = ({ setOpen, open, unique_camp, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const {
    campName,
    location,
    healthcareProfessional,
    fees,
    time,
    date,
    description,
    _id,
  } = unique_camp || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
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

      const updateData = {
        fees,
        campName: data.campName,
        location: data.location,
        date: data.date,
        time,
        description: data.description,
        healthcareProfessional,
        image,
      };

      const { data: update } = await axiosSecure.patch(
        `/update-camp/${_id}`,
        updateData
      );

      if (update.modifiedCount > 0) {
        setOpen(false);
        refetch();
        toast.success("Camp updated successfully 👍👍👍");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)}>
        <h2 className="text-center mt-8 lg:text-2xl text-xl font-merriweather font-semibold">
          Participant Registration
        </h2>

        <form className="overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Camp Name
                  </label>
                  <input
                    placeholder="Camp Name"
                    className="bg-gray-200 w-full p-2 rounded-sm"
                    {...register("campName", {
                      required: "Camp Name is required",
                    })}
                    defaultValue={campName}
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
                    {...register("location", {
                      required: "Location is required",
                    })}
                    defaultValue={location}
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
                    defaultValue={healthcareProfessional?.name}
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
                    defaultValue={healthcareProfessional?.specialization}
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
                    Camp Fees
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
                    defaultValue={fees}
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
                    defaultValue={date}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.date.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4 */}
              {/* <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start Time
                  </label>
                  <input
                    {...register("startTime", { required: "Time is required" })}
                    placeholder="Ex: 10:00 AM "
                    className="bg-gray-200 w-full p-2 rounded-sm border-none"
                    type="time"
                    defaultValue={unique_camp?.time?.startTime}
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
                    defaultValue={time?.endTime}
                  />
                  {errors.endTime && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.endTime.message}
                    </p>
                  )}
                </div>
              </div> */}

              {/* img */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <input
                  type="file"
                  className="block w-full border bg-gray-200"
                  {...register("image", { required: "image is required" })}
                  //   defaultValue={image}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div> */}

              {/* description  */}
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
                  defaultValue={description}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="flex md:gap-3 justify-between">
            <Button
              className="text-white md:px-6 py-0 md:py-1 rounded-lg"
              type="submit"
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin m-auto" />
              ) : (
                "Update Camp"
              )}
            </Button>
            <Button
              color="gray"
              className="py-0 md:py-1 md:px-6"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default UpdateCampModal;
