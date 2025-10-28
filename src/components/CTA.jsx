import React from "react";
import { FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
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
    </>
  );
};

export default CTA;
