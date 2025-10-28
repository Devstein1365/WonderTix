import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimesCircle, FaRedo, FaHome, FaPhone } from "react-icons/fa";

const PaymentFailed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderData } = location.state || {};

  const handleRetry = () => {
    if (orderData) {
      // Navigate back to checkout with same order data
      navigate("/checkout", {
        state: {
          tickets: orderData.tickets,
          total: orderData.totalAmount,
        },
      });
    } else {
      navigate("/tickets");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFEDED] py-12 px-6 font-sans">
      <div className="max-w-2xl mx-auto">
        {/* Failure Animation */}
        <div className="text-center mb-8">
          <div className="inline-block relative">
            <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTimesCircle className="text-white text-6xl animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#3A4F30] mb-2">
            Payment Failed
          </h1>
          <p className="text-xl text-gray-600">
            We couldn't process your payment
          </p>
        </div>

        {/* Error Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h2 className="font-bold text-red-900 mb-2">
              What might have gone wrong?
            </h2>
            <ul className="text-sm text-red-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>Insufficient funds in your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>Transaction declined by your bank</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>Network connection issues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>Invalid payment details</span>
              </li>
            </ul>
          </div>

          {orderData && (
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold text-[#3A4F30] mb-4">
                Transaction Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Reference:</span>
                  <span className="font-mono font-semibold">
                    {orderData.transactionRef}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-bold text-[#B54738]">
                    ₦{orderData.totalAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-semibold text-red-600">Failed</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Support Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <FaPhone className="text-blue-600 text-xl mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-blue-900 mb-1">Need Help?</h3>
              <p className="text-blue-700 text-sm mb-2">
                If you're experiencing issues, please contact our support team:
              </p>
              <p className="text-blue-900 font-semibold">
                Email: support@wondertix.com
              </p>
              <p className="text-blue-900 font-semibold">
                Phone: +234 (0) 803 XXX XXXX
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={handleRetry}
            className="flex items-center justify-center gap-2 bg-[#B54738] hover:bg-[#a03d2f] text-white font-bold py-4 rounded-lg transition-all hover:scale-[1.02]"
          >
            <FaRedo />
            Try Again
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 bg-[#3A4F30] hover:bg-[#2d3d26] text-white font-bold py-4 rounded-lg transition-all hover:scale-[1.02]"
          >
            <FaHome />
            Back to Home
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            No money was deducted from your account. If you see a debit, it will
            be reversed within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
