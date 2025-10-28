import React from "react";
import { Link } from "react-router-dom";
import {
  FaTicketAlt,
  FaUsers,
  FaChild,
  FaBaby,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";

const TicketPreview = () => {
  const ticketCategories = [
    {
      name: "Normal Ticket",
      icon: <FaTicketAlt className="text-4xl text-[#B54738]" />,
      description: "General access for individuals",
      price: "₦2,500",
      features: ["Full event access", "All attractions", "Valid for 1 person"],
    },
    {
      name: "Adult Ticket",
      icon: <FaUsers className="text-4xl text-[#B54738]" />,
      description: "For visitors 18 years and above",
      price: "₦3,000",
      features: ["Premium entry", "All attractions", "18+ only"],
    },
    {
      name: "Kids Ticket",
      icon: <FaChild className="text-4xl text-[#B54738]" />,
      description: "Ages 3-12 years",
      price: "₦1,500",
      features: ["Kid-friendly zones", "All attractions", "Age 3-12"],
      badge: "Discounted",
    },
    {
      name: "Mother & Child",
      icon: <FaBaby className="text-4xl text-[#B54738]" />,
      description: "Perfect combo for mom and one child",
      price: "₦4,000",
      features: ["1 Adult + 1 Child", "Bundle savings", "Limited availability"],
      badge: "Combo Deal",
    },
    {
      name: "Family Pack (4)",
      icon: <FaUserFriends className="text-4xl text-[#B54738]" />,
      description: "Two adults + Two kids",
      price: "₦8,500",
      originalPrice: "₦10,000",
      features: ["2 Adults + 2 Kids", "Save 15%", "Best value"],
      badge: "Save 15%",
    },
    {
      name: "Group Pack (6)",
      icon: <FaUsers className="text-4xl text-[#B54738]" />,
      description: "Perfect for larger groups",
      price: "₦12,000",
      originalPrice: "₦15,000",
      features: ["6 tickets included", "Save 20%", "Group discount"],
      badge: "Save 20%",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3A4F30] mb-4">
            Choose Your Perfect Ticket
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer flexible options for individuals, families, and groups
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ticketCategories.map((ticket, index) => (
            <div
              key={index}
              className="bg-[#FFEDED] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              {ticket.badge && (
                <div className="absolute top-4 right-4 bg-[#B54738] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {ticket.badge}
                </div>
              )}

              <div className="mb-4">{ticket.icon}</div>

              <h3 className="text-2xl font-bold text-[#3A4F30] mb-2">
                {ticket.name}
              </h3>

              <p className="text-gray-600 mb-4 text-sm">{ticket.description}</p>

              <div className="mb-4">
                {ticket.originalPrice && (
                  <span className="text-gray-400 line-through text-sm mr-2">
                    {ticket.originalPrice}
                  </span>
                )}
                <span className="text-3xl font-bold text-[#B54738]">
                  {ticket.price}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {ticket.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <FaCheckCircle className="text-[#3A4F30] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/tickets"
                className="block w-full bg-[#B54738] text-white text-center font-semibold py-3 rounded-lg hover:bg-[#a03d2f] transition-colors"
              >
                Select Ticket
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketPreview;
