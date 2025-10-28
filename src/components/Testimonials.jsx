import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah & Family",
      comment:
        "Absolutely magical! The kids had the best time and we'll definitely be back next year.",
      rating: 5,
    },
    {
      name: "Ahmed K.",
      comment:
        "The Family Pack was great value. Smooth entry with the QR codes. Highly recommend!",
      rating: 5,
    },
    {
      name: "Grace M.",
      comment:
        "Beautiful lights, great atmosphere, and wonderful memories. Worth every penny!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3A4F30] mb-4">
            What Visitors Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#FFEDED] rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
              <p className="font-semibold text-[#3A4F30]">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
