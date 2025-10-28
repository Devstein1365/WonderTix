import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
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
    </>
  );
};

export default Hero;
