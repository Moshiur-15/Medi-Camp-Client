import React, { useState } from "react";
import { Modal, Button, TextInput, Label, Radio } from "flowbite-react";
import useAuth from "../Hook/useAuth";

const CampJoinModal = ({ setOpen, open, camp, user }) => {
    console.log(user)
    const {
        campName,
        location,
        healthcareProfessional,
        fees,
      } = camp || {};

  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)}>
        <h2 className="text-center mt-8 lg:text-2xl text-xl font-merriweather font-semibold">Participant Registration</h2>
        <Modal.Body>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                value={healthcareProfessional.name}
              />
              <TextInput
                id="healthcare-professional"
                type="text"
                defaultValue={healthcareProfessional.specialization}
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
              />
            </div>

            {/* Participant Email */}
            <div>
              <Label htmlFor="participant-email" value="Participant Email" />
              <TextInput
                id="participant-email"
                type="email"
                defaultValue={user?.email}
                disabled
                className="mt-1 "
              />
            </div>

            {/* Phone Number */}
            <div>
              <Label htmlFor="phone-number" value="Phone Number" />
              <TextInput
                id="phone-number"
                type="text"
                placeholder="Phone Number"
                className="mt-1 !focus:bg-green-500 !focus:ring-4 !focus:ring-green-500"
              />
            </div>

            {/* Emergency Contact */}
            <div>
              <Label htmlFor="emergency-contact" value="Emergency Contact" />
              <TextInput
                id="emergency-contact"
                type="text"
                placeholder="Emergency Contact"
                className="mt-1"
              />
            </div>

            {/* Age */}
            <div>
              <Label htmlFor="age" value="Age" />
              <TextInput
                id="age"
                type="text"
                placeholder="Your Age"
                className="mt-1"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col mt-6">
              <Label value="Gender" />
              <div className="flex gap-4 mt-1">
                <div className="flex items-center">
                  <Radio id="male" name="gender" value="Male" />
                  <Label htmlFor="male" className="ml-2">
                    Male
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="female" name="gender" value="Female" />
                  <Label htmlFor="female" className="ml-2">
                    Female
                  </Label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer className="flex md:gap-3 justify-between" >
          <Button
            className="text-white md:px-6 py-0 md:py-1 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Register Camp
          </Button>
          <Button color="gray" className="py-0 md:py-1 md:px-6" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CampJoinModal;
