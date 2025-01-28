import toast from "react-hot-toast";
import { Modal, Button, TextInput, Label, Radio } from "flowbite-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { imgUp } from "../../api/Utils";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useState } from "react";

const UpdateCampModal = ({
  setOpen,
  open,
  unique_camp,
  refetch,
  setUniqueCamp,
}) => {
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
  } = unique_camp;
  console.log(unique_camp);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const healthcareProfessional = {
        name: data.healthcareProfessionalName,
        specialization: data.specialization,
      }
      const updateData={
        campName: data.campName,
        location: data.location,
        healthcareProfessional,
        fees: parseFloat(data.fees),
        date: data.date,
        description: data.description,
      }

      const { data: update } = await axiosSecure.patch(
        `/update-camp/${unique_camp._id}`,
        updateData
      );

      if (update.modifiedCount > 0) {
        toast.success("Camp updated successfully 👍");
        setOpen(false);
        refetch();
        setUniqueCamp([]);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)}>
        <h2 className="text-center mt-8 lg:text-2xl text-xl font-merriweather font-semibold">
          Update Camp
        </h2>

        <form className="overflow-x-auto" onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Camp Name
                  </label>
                  <input
                    name="campName"
                    placeholder="Camp Name"
                    defaultValue={campName}
                    className="bg-gray-200 w-full p-2 rounded-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    name="location"
                    placeholder="Ex: Dhaka, Bangladesh"
                    defaultValue={location}
                    className="bg-gray-200 w-full p-2 rounded-sm"
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Healthcare Professional Name
                  </label>
                  <input
                    name="healthcareProfessionalName"
                    placeholder="Dr. Name"
                    defaultValue={healthcareProfessional?.name}
                    className="bg-gray-200 w-full p-2 rounded-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Specialization
                  </label>
                  <input
                    name="specialization"
                    placeholder="Ex: Cardiologist"
                    defaultValue={healthcareProfessional?.specialization}
                    className="bg-gray-200 w-full p-2 rounded-sm"
                    required
                  />
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
                    name="fees"
                    placeholder="Camp Fees"
                    defaultValue={fees}
                    className="bg-gray-200 w-full p-2 rounded-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Camp Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    defaultValue={date}
                    className="bg-gray-200 w-full p-2 rounded-sm"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Write about the camp."
                  defaultValue={description}
                  rows={6}
                  className="bg-gray-200 w-full p-2 rounded-sm ring-0 focus:bg-gray-50"
                  required
                  minLength={100}
                />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="flex md:gap-3 justify-between">
            <Button
              className="text-white md:px-6 py-0 md:py-1 rounded-lg"
              type="submit"
              disabled={loading}
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
              onClick={() => {
                setOpen(false);
                setUniqueCamp([]);
              }}
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
