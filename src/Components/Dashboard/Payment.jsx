import { Modal, Button } from "flowbite-react";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);

const Payment = ({ setOpenModal, openModal, data, refetch }) => {
  return (
    <div>
      <Modal size="md" show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Payment Now</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Elements stripe={stripePromise}>
              <CheckoutForm data={data} setOpenModal={setOpenModal} refetch={refetch} />
            </Elements>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Payment;
