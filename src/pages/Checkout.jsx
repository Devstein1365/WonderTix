import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaShoppingCart,
  FaTicketAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tickets, total } = location.state || { tickets: [], total: 0 };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Redirect if no tickets selected
  useEffect(() => {
    if (!tickets || tickets.length === 0) {
      navigate("/tickets");
    }
  }, [tickets, navigate]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (Nigerian format)
    const phoneRegex = /^(\+?234|0)[789]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid Nigerian phone number";
    }

    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Generate transaction reference
  const generateTxRef = () => {
    return `WTX-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;
  };

  // Handle payment submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Prepare order data
    const orderData = {
      transactionRef: generateTxRef(),
      customerInfo: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
      },
      tickets: tickets,
      totalAmount: total,
      orderDate: new Date().toISOString(),
      status: "pending",
    };

    // Save to localStorage
    localStorage.setItem("pendingOrder", JSON.stringify(orderData));

    // Simulate redirect to Alat Payment Gateway
    setTimeout(() => {
      // In production, this will redirect to actual Alat payment URL
      // For now, we'll show a mock payment page
      redirectToAlatPayment(orderData);
    }, 1500);
  };

  // Mock Alat Payment Gateway Redirect
  const redirectToAlatPayment = (orderData) => {
    // TODO: Replace with actual Alat payment gateway integration
    // const alatPaymentUrl = `https://payment.alat.ng/checkout`;

    // For now, we'll navigate to a mock payment page
    // In production, you'll construct the payment URL with these parameters:
    const paymentParams = {
      amount: orderData.totalAmount,
      email: orderData.customerInfo.email,
      phone: orderData.customerInfo.phone,
      reference: orderData.transactionRef,
      callback_url: `${window.location.origin}/payment-success`,
      cancel_url: `${window.location.origin}/payment-failed`,
      // merchant_id: "YOUR_ALAT_MERCHANT_ID", // Add when you get credentials
      // api_key: "YOUR_ALAT_API_KEY", // Add when you get credentials
    };

    console.log("Payment Parameters:", paymentParams);

    // Mock redirect - replace with actual redirect in production
    navigate("/payment-processing", { state: { orderData, paymentParams } });
  };

  if (!tickets || tickets.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FFEDED] py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3A4F30] mb-2">Checkout</h1>
          <p className="text-gray-600">
            Complete your order and secure your tickets
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary - Left Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-[#3A4F30] mb-6 flex items-center gap-2">
                <FaShoppingCart />
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {tickets.map((ticket, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start pb-4 border-b"
                  >
                    <div className="flex gap-3">
                      <FaTicketAlt className="text-[#B54738] mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {ticket.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Qty: {ticket.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-800">
                      ₦{(ticket.price * ticket.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    ₦{total.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="font-semibold">₦0</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold text-[#B54738] pt-4 border-t">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#FFEDED] rounded-lg">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                  <p className="text-sm text-gray-700">
                    Your tickets will be sent to your email immediately after
                    payment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#3A4F30] mb-6">
                Customer Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B54738] ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B54738] ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="080XXXXXXXX or +234XXXXXXXXXX"
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B54738] ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Your tickets will be sent via SMS and email
                  </p>
                </div>

                {/* Security Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <FaLock className="text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-900 mb-1">
                        Secure Payment
                      </p>
                      <p className="text-sm text-blue-700">
                        You will be redirected to Alat by Wema Bank's secure
                        payment gateway to complete your transaction
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-[#B54738] border-gray-300 rounded focus:ring-[#B54738]"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{" "}
                      <a href="/terms" className="text-[#B54738] underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-[#B54738] underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#B54738] hover:bg-[#a03d2f] hover:scale-[1.02]"
                  } text-white shadow-lg`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `Proceed to Payment - ₦${total.toLocaleString()}`
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
