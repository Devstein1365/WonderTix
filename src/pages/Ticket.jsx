import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBaby,
  FaCheckCircle,
  FaChild,
  FaMobileAlt,
  FaShieldAlt,
  FaTicketAlt,
  FaUserFriends,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

const Ticket = () => {
  const navigate = useNavigate();
  const [selectedTickets, setSelectedTickets] = useState({});

  const ticketCategories = [
    {
      id: 1,
      name: "Normal Ticket",
      icon: <FaTicketAlt className="text-4xl text-[#B54738]" />,
      description: "General access for individuals",
      price: 2500,
      features: ["Full event access", "All attractions", "Valid for 1 person"],
    },
    {
      id: 2,
      name: "Adult Ticket",
      icon: <FaUsers className="text-4xl text-[#B54738]" />,
      description: "For visitors 18 years and above",
      price: 3000,
      features: ["Premium entry", "All attractions", "18+ only"],
    },
    {
      id: 3,
      name: "Kids Ticket",
      icon: <FaChild className="text-4xl text-[#B54738]" />,
      description: "Ages 3-12 years",
      price: 1500,
      features: ["Kid-friendly zones", "All attractions", "Age 3-12"],
      badge: "Discounted",
    },
    {
      id: 4,
      name: "Mother & Child",
      icon: <FaBaby className="text-4xl text-[#B54738]" />,
      description: "Perfect combo for mom and one child",
      price: 4000,
      features: ["1 Adult + 1 Child", "Bundle savings", "Limited availability"],
      badge: "Combo Deal",
    },
    {
      id: 5,
      name: "Family Pack (4)",
      icon: <FaUserFriends className="text-4xl text-[#B54738]" />,
      description: "Two adults + Two kids",
      price: 8500,
      originalPrice: 10000,
      features: ["2 Adults + 2 Kids", "Save 15%", "Best value"],
      badge: "Save 15%",
    },
    {
      id: 6,
      name: "Group Pack (6)",
      icon: <FaUsers className="text-4xl text-[#B54738]" />,
      description: "Perfect for larger groups",
      price: 12000,
      originalPrice: 15000,
      features: ["6 tickets included", "Save 20%", "Group discount"],
      badge: "Save 20%",
    },
  ];

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

  const handleQuantityChange = (ticketId, quantity) => {
    const qty = parseInt(quantity) || 0;
    if (qty < 0) return;

    setSelectedTickets((prev) => {
      const updated = { ...prev };
      if (qty === 0) {
        delete updated[ticketId];
      } else {
        updated[ticketId] = qty;
      }
      return updated;
    });
  };

  const calculateTotal = () => {
    return Object.entries(selectedTickets).reduce(
      (total, [ticketId, quantity]) => {
        const ticket = ticketCategories.find(
          (t) => t.id === parseInt(ticketId)
        );
        return total + ticket.price * quantity;
      },
      0
    );
  };

  const getSelectedCount = () => {
    return Object.values(selectedTickets).reduce((sum, qty) => sum + qty, 0);
  };

  const handleClearSelection = () => {
    setSelectedTickets({});
  };

  const handleProceedToCheckout = () => {
    console.log("=== CHECKOUT BUTTON CLICKED ===");
    console.log("Selected Tickets Object:", selectedTickets);

    // Build selected tickets array
    const selected = [];
    for (const [ticketId, quantity] of Object.entries(selectedTickets)) {
      if (quantity > 0) {
        const ticket = ticketCategories.find(
          (t) => t.id === parseInt(ticketId)
        );
        if (ticket) {
          selected.push({
            id: ticket.id,
            name: ticket.name,
            price: ticket.price,
            quantity: quantity,
          });
        }
      }
    }

    console.log("Selected Tickets Array:", selected);
    console.log("Total Amount:", calculateTotal());

    if (selected.length === 0) {
      alert("Please select at least one ticket");
      return;
    }

    try {
      console.log("Navigating to /checkout...");
      navigate("/checkout", {
        state: {
          tickets: selected,
          total: calculateTotal(),
        },
      });
      console.log("Navigation initiated!");
    } catch (error) {
      console.error("Navigation error:", error);
      alert("Navigation failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFEDED] font-sans">
      {/* Header/Banner */}
      <section className="bg-linear-to-r from-[#B54738] to-[#3A4F30] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Tickets 🎫
          </h1>
          <p className="text-xl mb-6 opacity-95">
            Select your ticket category and secure your spot at Festive
            Wonderland
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>Dec 15 - Jan 5</span>
            </div>
            <div className="hidden sm:block text-2xl">•</div>
            <div className="flex items-center gap-2">
              <FaClock />
              <span>10 AM - 10 PM Daily</span>
            </div>
            <div className="hidden sm:block text-2xl">•</div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>Minna City Park</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Selection Grid */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3A4F30] mb-4">
            Choose Your Tickets
          </h2>
          <p className="text-lg text-gray-700">
            Select quantity for each ticket type below
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ticketCategories.map((ticket) => (
            <div
              key={ticket.id}
              className={`bg-white rounded-2xl p-6 shadow-md transition-all duration-300 relative overflow-hidden ${
                selectedTickets[ticket.id] > 0
                  ? "ring-2 ring-[#B54738] shadow-xl"
                  : "hover:shadow-lg"
              }`}
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
                    ₦{ticket.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-3xl font-bold text-[#B54738]">
                  ₦{ticket.price.toLocaleString()}
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

              {/* Quantity Selector */}
              <div className="border-t pt-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        ticket.id,
                        (selectedTickets[ticket.id] || 0) - 1
                      )
                    }
                    className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors font-bold text-lg"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="0"
                    value={selectedTickets[ticket.id] || 0}
                    onChange={(e) =>
                      handleQuantityChange(ticket.id, e.target.value)
                    }
                    className="w-20 h-10 text-center border-2 border-gray-300 rounded-lg focus:border-[#B54738] focus:outline-none text-lg font-semibold"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        ticket.id,
                        (selectedTickets[ticket.id] || 0) + 1
                      )
                    }
                    className="w-10 h-10 bg-[#B54738] text-white rounded-lg hover:bg-[#a03d2f] transition-colors font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        {getSelectedCount() > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky bottom-6">
            {/* Cancel/Close Button */}
            <button
              onClick={handleClearSelection}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-red-500 hover:text-white text-gray-600 rounded-full transition-all hover:scale-110"
              title="Cancel and clear selection"
            >
              <FaTimes />
            </button>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#3A4F30] mb-2">
                  Order Summary
                </h3>
                <p className="text-gray-600">
                  {getSelectedCount()} ticket
                  {getSelectedCount() !== 1 ? "s" : ""} selected
                </p>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                <p className="text-4xl font-bold text-[#B54738]">
                  ₦{calculateTotal().toLocaleString()}
                </p>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleProceedToCheckout();
                }}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#B54738] text-white font-bold text-[13px] md:text-lg px-10 py-[11px] rounded-full shadow-lg hover:bg-[#a03d2f] hover:scale-105 transition-all cursor-pointer"
              >
                <FaShoppingCart />
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Why Choose WonderTix */}
      <section className="py-16 px-6 bg-white">
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

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#FFEDED]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#3A4F30] mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-white rounded-lg p-6 shadow-md">
              <summary className="font-semibold text-lg text-[#3A4F30] cursor-pointer">
                How will I receive my tickets?
              </summary>
              <p className="mt-3 text-gray-700">
                After completing your purchase, you'll receive an email with
                your tickets as a PDF attachment and a QR code that can be
                scanned at the entrance.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-md">
              <summary className="font-semibold text-lg text-[#3A4F30] cursor-pointer">
                Can I cancel or refund my tickets?
              </summary>
              <p className="mt-3 text-gray-700">
                Tickets can be refunded up to 48 hours before the event date.
                Please contact our support team for assistance.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-md">
              <summary className="font-semibold text-lg text-[#3A4F30] cursor-pointer">
                Are children under 3 allowed free entry?
              </summary>
              <p className="mt-3 text-gray-700">
                Yes! Children under 3 years old can enter for free without a
                ticket.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-md">
              <summary className="font-semibold text-lg text-[#3A4F30] cursor-pointer">
                What payment methods do you accept?
              </summary>
              <p className="mt-3 text-gray-700">
                We accept all major debit/credit cards, bank transfers, and
                mobile payments via Paystack.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ticket;
