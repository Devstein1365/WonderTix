import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams(); // e.g. /event/1
  const navigate = useNavigate();

  // Example ticket data (will later come from API)
  const tickets = [
    { id: 1, name: "Normal Ticket", price: 2000 },
    { id: 2, name: "Adult Ticket", price: 2500 },
    { id: 3, name: "Kids Ticket", price: 1500 },
    { id: 4, name: "Mother & Child", price: 3500 },
    { id: 5, name: "Family Pack (4)", price: 7000 },
    { id: 6, name: "Group Pack (6)", price: 9000 },
  ];

  const [selectedTickets, setSelectedTickets] = useState({});

  const handleQuantityChange = (ticketId, quantity) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [ticketId]: quantity,
    }));
  };

  const handleProceed = () => {
    const selected = tickets
      .filter((t) => selectedTickets[t.id] > 0)
      .map((t) => ({
        ...t,
        quantity: selectedTickets[t.id],
      }));

    if (selected.length === 0) {
      alert("Please select at least one ticket category.");
      return;
    }

    navigate("/checkout", { state: { selected } });
  };

  return (
    <div className="min-h-screen bg-blush py-10 px-6 font-sans">
      {/* Event Banner */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Festive Wonderland 🎄
        </h1>
        <p className="text-green mb-6">
          December 15th – January 5th | Minna City Park
        </p>
        <img
          src="https://images.unsplash.com/photo-1608889175123-97fbc9b5a0af?auto=format&fit=crop&w=1000&q=80"
          alt="Festive event"
          className="rounded-2xl shadow-lg mx-auto mb-8"
        />
        <p className="text-green max-w-3xl mx-auto leading-relaxed">
          Celebrate the season with lights, laughter, and love! Choose your
          ticket type below and secure your spot at the most magical event of
          the year.
        </p>
      </section>

      {/* Ticket Categories */}
      <section className="max-w-4xl mx-auto grid gap-6">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex justify-between items-center transition"
          >
            <div>
              <h2 className="text-lg font-semibold text-primary">
                {ticket.name}
              </h2>
              <p className="text-green text-sm">₦{ticket.price.toLocaleString()}</p>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm text-green">Qty:</label>
              <input
                type="number"
                min="0"
                value={selectedTickets[ticket.id] || 0}
                onChange={(e) =>
                  handleQuantityChange(ticket.id, parseInt(e.target.value) || 0)
                }
                className="w-16 border border-green rounded-lg text-center focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Proceed Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleProceed}
          className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
