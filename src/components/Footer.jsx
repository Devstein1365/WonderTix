import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
