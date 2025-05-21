import React, { useState } from "react";
import faq from "../assets/faq.png";

const faqData = [
  {
    question: "How do I register for a medical camp?",
    answer:
      "Registration for our medical camps can be done through our website. Simply visit the event page of the camp you're interested in and follow the registration instructions provided there.",
  },
  {
    question: "Are these medical camps free of charge?",
    answer:
      "Yes, all medical camps are free of charge, as part of our initiative to provide healthcare access to all.",
  },
  {
    question: "Can I volunteer at the medical camps?",
    answer:
      "Absolutely! We welcome volunteers. You can apply on our website or contact us directly for more information.",
  },
  {
    question: "What medical services are provided during the camp?",
    answer:
      "Our medical camps offer a variety of services, including general check-ups, consultations with specialists, and free medications for common ailments. The exact services depend on the camp's location and schedule.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 xl:px-20 py-10">
      <h1 className="text-[#27477D] text-xl md:text-3xl font-bold text-center font-merriweather mb-1">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <p className="mb-10 text-center md:text-2xl italic">Your Queries Answered</p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* FAQ Accordions */}
        <div className="">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-200 bg-blue-100 text-[16px] lg:text-xl"
            >
              <button
                className="w-full text-left p-4 font-semibold text-[#27477D] hover:bg-blue-50 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700 text-sm transition-all duration-300 text-[16px] lg:text-xl">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img src={faq} alt="Doctor thinking" className="w-full md:max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
