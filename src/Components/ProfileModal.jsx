import React from "react";
import { Modal, Button, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hook/useAxiosSecure";

const ProfileModal = ({ isModalOpen, setIsModalOpen, refetch }) => {
  const { user, setUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    setIsModalOpen(false);
    const location = data.location;
    const contact = data.contact;
    const profile = {
      location,
      contact,
    };
    await axiosSecure.put(`/update-profile/${user?.email}`, profile);
    refetch();
    toast.success("Profile updated successfully!");
  };

  return (
    <div>
      <Modal size="md" show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <TextInput
                label="Location"
                placeholder="Enter your Location"
                type="text"
                {...register("location", {
                  required: "location is required",
                })}
              />
              {errors.location && (
                <p className="text-red-500 text-xs">
                  {errors.location.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <TextInput
                label="Contact"
                placeholder="Enter your contact number"
                type="number"
                {...register("contact", {
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
              {errors.contact && (
                <p className="text-red-500 text-xs">{errors.contact.message}</p>
              )}
            </div>

            <Button
              color=""
              type="submit"
              className="mt-4 mx-auto w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProfileModal;
