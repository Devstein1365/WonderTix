import React from "react"
import { FaBaby, FaCheckCircle, FaChild, FaMobileAlt, FaShieldAlt, FaTicketAlt, FaUserFriends, FaUsers } from "react-icons/fa";

const Ticket = ()=> {
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
        <div>
            Ticket
        </div>
    )
}

export default Ticket
