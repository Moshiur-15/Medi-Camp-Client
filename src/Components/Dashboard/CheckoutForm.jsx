import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./ChectoutForm.css";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import LoadingSpinner from "../LoadingSpinner";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CheckoutForm = ({ data, setOpenModal, refetch }) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { fees, _id } = data || {};

  const { data: Payment, Loading } = useQuery({
    queryKey: ["paymentData"],
    queryFn: async () => {
      const { data } = await axiosSecure.post(`/create-payment-intent`, {
        fees,
      });
      return data;
    },
  });

  if (Loading) return <LoadingSpinner />;
  const clientSecret = Payment?.clientSecret;
  console.log(clientSecret);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      toast.error(error?.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("[confirmError]", confirmError);
      toast.error(confirmError?.message);
      setLoading(false);
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log("[paymentIntent]", paymentIntent);
        setLoading(false);
        setOpenModal(false);
        toast.success(paymentIntent?.id);

        try {
          await axiosSecure.post(`/update-payment-status`, {
            PaymentStatus: "paid",
            id: _id,
          });
          refetch()
        } catch (error) {
          console.error("Error updating payment status:", error);
          toast.error("Error updating payment status.");
        }
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="bg-blue-500 flex mx-auto mt-6 text-white px-6 py-2 rounded-md"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
          ) : (
            `Pay ${fees}`
          )}
        </button>
      </div>
    </form>
  );
};
export default CheckoutForm;
