import { Link } from "react-router-dom";
import {
  FaTicketAlt,
  FaUsers,
  FaBaby,
  FaChild,
  FaUserFriends,
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function Home() {
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
    <div className="min-h-screen bg-[#FFEDED] flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative w-full bg-linear-to-br from-[#B54738] via-[#c55848] to-[#3A4F30] text-white py-24 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20">❄️</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20">
          ⭐
        </div>
        <div className="absolute top-1/2 left-1/4 text-4xl opacity-10">🎄</div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to Festive Wonderland
          </h1>
          <p className="text-xl md:text-2xl mb-4 leading-relaxed opacity-95">
            Experience the magic of the holidays with your loved ones
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-lg">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>Dec 15th – Jan 5th</span>
            </div>
            <div className="hidden sm:block text-2xl">•</div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>Minna City Park</span>
            </div>
          </div>

          <Link
            to="/tickets"
            className="inline-flex items-center gap-3 bg-white text-[#B54738] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <FaTicketAlt className="text-xl" />
            Get Your Tickets Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=800&q=80"
          alt="Festive lights"
          className="rounded-2xl shadow-lg"
        />

        <div className="text-left">
          <h2 className="text-3xl font-bold text-primary mb-4">
            A Magical Family Experience 🎁
          </h2>
          <p className="text-green leading-relaxed mb-4">
            Festive Wonderland brings the Christmas spirit alive with fun rides,
            dazzling lights, and special treats for both adults and kids. Enjoy
            live shows, games, and festive markets that make memories last.
          </p>
          <p className="text-green leading-relaxed">
            Whether you're visiting with friends, kids, or the entire family,
            we’ve got a ticket just for you.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-linear-to-r from-[#B54738] to-[#3A4F30] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for the Adventure? 🎉
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Don't miss out on the most magical event of the season!
          </p>
          <Link
            to="/tickets"
            className="inline-flex items-center gap-3 bg-white text-[#B54738] font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <FaTicketAlt />
            Book Your Tickets Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A4F30] text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="font-bold text-lg mb-3">Festive Wonderland</h4>
              <p className="text-sm opacity-90">
                Creating magical memories for families since 2025
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <Link to="/tickets" className="hover:underline">
                    Buy Tickets
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Event Info</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <FaCalendarAlt /> Dec 15 - Jan 5
                </li>
                <li className="flex items-center gap-2">
                  <FaClock /> 10 AM - 10 PM Daily
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Minna City Park
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-sm opacity-90">
            <p>
              © {new Date().getFullYear()} WonderTix - Festive Wonderland. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
