import React from "react";

// Sample feedback data
const feedbacks = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment:
      "The camp was amazing! Loved the activities and the friendly instructors. Highly recommended.",
    date: "2025-01-10",
    campName: "Adventure Seekers",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment:
      "Great experience overall, but the food options could be improved. Still, I had a lot of fun!",
    date: "2025-01-12",
    campName: "Nature Explorers",
  },
  {
    id: 3,
    name: "Anonymous",
    rating: 3,
    comment:
      "The location was beautiful, but the scheduling was not well-organized. It could have been better.",
    date: "2025-01-13",
    campName: "Weekend Warriors",
  },
];

const Feedback = () => {
  return (
    <div className="bg-gray-100 py-10">
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold font-merriweather text-center mb-2">
          Participant Feedback and Ratings
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-center">
          Discover honest reviews from campers and gain valuable insights into
          their experiences, helping you make the best decision for your next
          adventure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <div>
                    <img
                      src={feedback.image || "https://via.placeholder.com/150"}
                      className="rounded-full h-10 w-10"
                      alt={feedback.name || "Anonymous"}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {feedback.name || "Anonymous"}
                    </h3>
                    <p className="text-sm text-gray-500">{feedback.date}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    {[...Array(feedback.rating)].map((_, index) => (
                      <span key={index} className="text-yellow-500 text-lg">
                        ★
                      </span>
                    ))}
                    {[...Array(5 - feedback.rating)].map((_, index) => (
                      <span key={index} className="text-gray-300 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                {feedback.comment.slice(0, 100)}...
                <a className="text-blue-500 ml-1">Read More</a>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Camp: {feedback.campName}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feedback;
