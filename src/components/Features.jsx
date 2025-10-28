import React from "react";
import { FaMobileAlt, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaMobileAlt className="text-3xl text-[#B54738]" />,
      title: "Digital Tickets",
      description: "Instant QR code delivery to your email",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#B54738]" />,
      title: "Secure Payment",
      description: "Safe and encrypted transactions",
    },
    {
      icon: <FaCheckCircle className="text-3xl text-[#B54738]" />,
      title: "Easy Check-in",
      description: "Quick entry with QR code scanning",
    },
  ];

  return (
    <section className="py-16 px-6 bg-linear-to-b from-[#FFEDED] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3A4F30] mb-4">
            Why Book with WonderTix?
          </h2>
          <p className="text-lg text-gray-700">
            Fast, secure, and hassle-free ticketing experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#3A4F30] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
