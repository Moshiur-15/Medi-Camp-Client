import { useState } from "react";
import toast from "react-hot-toast";
import { Modal, Button, TextInput, Label, Radio } from "flowbite-react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useAxiosSecure from "../Hook/useAxiosSecure";

const CampJoinModal = ({ setOpen, open, camp, user, refetch }) => {
  const {
    campName,
    location,
    healthcareProfessional,
    fees,
    _id,
  } = camp || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    try {
      const participantEmail = data.participantEmail;
      const participantName = data.participantName;
      const gender = data.gender;
      const phone = parseInt(data.phone);
      const emergencyContact = parseInt(data.emergencyContact);
      const age = parseInt(data.age);

      const formData = {
        participantEmail,
        participantStatus: "pending",
        participantName,
        gender,
        phone,
        emergencyContact,
        age,
        campId: _id,
        PaymentStatus: "unpaid",
      };
      setLoading(true);
      await axiosSecure.post(`/register-camp`, formData);
      refetch()
      toast.success("You have successfully joined Request👍");
      setOpen(false);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message);
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="camp-name" value="Camp Name" />
                <TextInput
                  id="camp-name"
                  type="text"
                  defaultValue={campName}
                  disabled
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="location" value="Location" />
                <TextInput
                  id="location"
                  type="text"
                  defaultValue={location}
                  disabled
                  className="mt-1"
                />
              </div>

              <div>
                <Label
                  htmlFor="healthcare-professional"
                  value={healthcareProfessional?.name}
                />
                <TextInput
                  id="healthcare-professional"
                  type="text"
                  defaultValue={healthcareProfessional?.specialization}
                  disabled
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="camp-fee" value="Camp Fee" />
                <TextInput
                  id="camp-fee"
                  type="text"
                  defaultValue={`$${fees}`}
                  disabled
                  className="mt-1"
                />
              </div>

              {/* Participant Name */}
              <div>
                <Label htmlFor="participant-name" value="Participant Name" />
                <TextInput
                  id="participant-name"
                  type="text"
                  placeholder="Your Name"
                  className="mt-1"
                  defaultValue={user?.displayName}
                  readOnly
                  {...register("participantName", {
                    required: "participant Name is required",
                  })}
                />
              </div>

              {/* Participant Email */}
              <div>
                <Label htmlFor="participant-email" value="Participant Email" />
                <TextInput
                  id="participant-email"
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  className="mt-1"
                  {...register("participantEmail", {
                    required: "participant email is required",
                  })}
                />
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phone-number" value="Phone Number" />
                <TextInput
                  id="phone-number"
                  type="number"
                  placeholder="Phone Number"
                  className="mt-1"
                  {...register("phone", {
                    required: "Phone Number is required",
                    minLength: {
                      value: 11,
                      message: "Phone Number must be 11 digits",
                    },
                    maxLength: {
                      value: 11,
                      message: "Phone Number must be 11 digits",
                    },
                    pattern: {
                      value: /^(0\d{10})$/,
                      message:
                        "Phone Number must be a valid 11-digit number starting with 0",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Emergency Contact */}
              <div>
                <Label htmlFor="emergency-contact" value="Emergency Contact" />
                <TextInput
                  id="emergency-contact"
                  type="number"
                  placeholder="Emergency Contact"
                  className="mt-1"
                  {...register("emergencyContact", {
                    required: "Emergency Contact is required",
                    minLength: {
                      value: 11,
                      message: "Phone Number must be 11 digits",
                    },
                    maxLength: {
                      value: 11,
                      message: "Phone Number must be 11 digits",
                    },
                    pattern: {
                      value: /^(0\d{10})$/,
                      message:
                        "Phone Number must be a valid 11-digit number starting with 0",
                    },
                  })}
                />
                {errors.emergencyContact && (
                  <span className="text-red-500 text-sm">
                    {errors.emergencyContact.message}
                  </span>
                )}
              </div>

              {/* Age */}
              <div>
                <Label htmlFor="age" value="Age" />
                <TextInput
                  id="age"
                  type="number"
                  placeholder="Your Age"
                  className="mt-1"
                  {...register("age", { required: "Age is required" })}
                />
                {errors.age && (
                  <span className="text-red-500 text-sm">
                    {errors.age.message}
                  </span>
                )}
              </div>

              {/* Gender */}
              <div className="flex flex-col mt-6">
                <Label value="Gender" />
                <div className="flex gap-4 mt-1">
                  <div className="flex items-center">
                    <Radio
                      id="male"
                      value="Male"
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                    />
                    <Label htmlFor="male" className="ml-2">
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio
                      id="female"
                      value="Female"
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                    />
                    <Label htmlFor="female" className="ml-2">
                      Female
                    </Label>
                  </div>
                </div>
                {errors.gender && (
                  <span className="text-red-500 text-sm">
                    {errors.gender.message}
                  </span>
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
                "Register Camp"
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

export default CampJoinModal;
