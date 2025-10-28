import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentProcessing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderData, paymentParams } = location.state || {};

  useEffect(() => {
    if (!orderData) {
      navigate("/tickets");
      return;
    }

    // TODO: In production, replace this with actual Alat payment gateway redirect
    // Example redirect code:
    /*
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://payment.alat.ng/checkout';
    
    Object.keys(paymentParams).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = paymentParams[key];
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    */

    // For demo purposes, we'll simulate a payment process
    const timer = setTimeout(() => {
      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.2; // 80% success rate

      if (isSuccess) {
        navigate("/payment-success", { state: { orderData } });
      } else {
        navigate("/payment-failed", { state: { orderData } });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [orderData, navigate, paymentParams]);

  return (
    <div className="min-h-screen bg-[#FFEDED] flex items-center justify-center px-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-[#B54738] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg
              className="w-10 h-10 text-white animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#3A4F30] mb-2">
            Processing Payment
          </h1>
          <p className="text-gray-600">
            Please wait while we redirect you to Alat Payment Gateway...
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Do not close this window or press the back
            button
          </p>
        </div>

        {orderData && (
          <div className="text-left bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Transaction Reference:</p>
            <p className="font-mono font-semibold text-gray-800 text-sm">
              {orderData.transactionRef}
            </p>
            <p className="text-sm text-gray-600 mt-3 mb-1">Amount:</p>
            <p className="font-bold text-[#B54738] text-lg">
              ₦{orderData.totalAmount.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentProcessing;
