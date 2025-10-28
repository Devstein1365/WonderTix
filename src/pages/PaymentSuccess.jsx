import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaDownload, FaEnvelope, FaHome } from "react-icons/fa";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderData } = location.state || {};

  useEffect(() => {
    if (!orderData) {
      navigate("/tickets");
      return;
    }

    // Update order status to 'completed'
    const completedOrder = {
      ...orderData,
      status: "completed",
      paymentDate: new Date().toISOString(),
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    existingOrders.push(completedOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // Remove pending order
    localStorage.removeItem("pendingOrder");
  }, [orderData, navigate]);

  const handleDownloadTickets = () => {
    // TODO: Generate and download PDF tickets
    alert("Ticket download will be implemented. For now, check your email!");
  };

  if (!orderData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FFEDED] py-12 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-block relative">
            <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <FaCheckCircle className="text-white text-6xl" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-32 h-32 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#3A4F30] mb-2">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600">
            Your tickets have been confirmed
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-bold text-[#3A4F30] mb-4">
              Order Confirmation
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600 mb-1">Transaction Reference</p>
                <p className="font-mono font-semibold text-gray-800">
                  {orderData.transactionRef}
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Payment Date</p>
                <p className="font-semibold text-gray-800">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Customer Name</p>
                <p className="font-semibold text-gray-800">
                  {orderData.customerInfo.fullName}
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Email</p>
                <p className="font-semibold text-gray-800">
                  {orderData.customerInfo.email}
                </p>
              </div>
            </div>
          </div>

          {/* Tickets List */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#3A4F30] mb-4">
              Your Tickets
            </h3>
            <div className="space-y-3">
              {orderData.tickets.map((ticket, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#FFEDED] rounded-lg p-4"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{ticket.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {ticket.quantity}
                    </p>
                  </div>
                  <p className="font-bold text-[#B54738]">
                    ₦{(ticket.price * ticket.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-2xl font-bold">
              <span className="text-[#3A4F30]">Total Paid</span>
              <span className="text-[#B54738]">
                ₦{orderData.totalAmount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Email Notification */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-600 text-2xl mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-blue-900 mb-1">Check Your Email</h3>
              <p className="text-blue-700 text-sm">
                We've sent your tickets and receipt to{" "}
                <strong>{orderData.customerInfo.email}</strong>. Please check
                your inbox and spam folder.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={handleDownloadTickets}
            className="flex items-center justify-center gap-2 bg-[#B54738] hover:bg-[#a03d2f] text-white font-bold py-4 rounded-lg transition-all hover:scale-[1.02]"
          >
            <FaDownload />
            Download Tickets
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 bg-[#3A4F30] hover:bg-[#2d3d26] text-white font-bold py-4 rounded-lg transition-all hover:scale-[1.02]"
          >
            <FaHome />
            Back to Home
          </button>
        </div>

        {/* Event Details Reminder */}
        <div className="mt-8 bg-white rounded-lg p-6 text-center">
          <h3 className="font-bold text-[#3A4F30] mb-2">Event Details</h3>
          <p className="text-gray-700 mb-1">
            <strong>Festive Wonderland 2024</strong>
          </p>
          <p className="text-gray-600 text-sm">
            December 15, 2024 - January 5, 2025
          </p>
          <p className="text-gray-600 text-sm">Minna City Park, Niger State</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
