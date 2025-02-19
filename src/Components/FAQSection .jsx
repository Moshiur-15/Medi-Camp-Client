import React from "react";
import { Accordion } from "flowbite-react";
import faq from "../assets/faq.png";

const FAQSection = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-2 xl:mx-36">
        <h1 className="text-[#27477D] text-xl md:text-3xl font-bold text-center font-merriweather mb-1">
          Frequently Asked Questions
        </h1>
        <p className="mb-10 text-center md:text-2xl">Your Queries Answered</p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* FAQ Section */}
          <div>
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>
                  How do I register for a medical camp?
                </Accordion.Title>
                <Accordion.Content>
                  <p>
                    Registration for our medical camps can be done through our
                    website. Simply visit the event page of the camp you're
                    interested in and follow the registration instructions
                    provided there.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  Are these medical camps free of charge?
                </Accordion.Title>
                <Accordion.Content>
                  <p>
                    Yes, all medical camps are free of charge, as part of our
                    initiative to provide healthcare access to all.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  Can I volunteer at the medical camps?
                </Accordion.Title>
                <Accordion.Content>
                  <p>
                    Absolutely! We welcome volunteers. You can apply on our
                    website or contact us directly for more information.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  What medical services are provided during the camp?
                </Accordion.Title>
                <Accordion.Content>
                  <p>
                    Our medical camps offer a variety of services, including
                    general check-ups, consultations with specialists, and free
                    medications for common ailments. The exact services depend
                    on the camp's location and schedule.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>

          {/* Doctor Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={faq}
              alt="Doctor thinking"
              className="w-full md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
