import React from "react";

const EventHighlights = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3A4F30] mb-4">
          What to Expect
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A magical experience filled with joy, wonder, and unforgettable
          memories
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=800&q=80"
          alt="Festive lights and decorations"
          className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
        />

        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="text-3xl">🎪</div>
            <div>
              <h3 className="text-xl font-bold text-[#3A4F30] mb-2">
                Fun Rides & Activities
              </h3>
              <p className="text-gray-700">
                Exciting attractions for all ages, from thrilling rides to
                gentle carousels
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="text-3xl">✨</div>
            <div>
              <h3 className="text-xl font-bold text-[#3A4F30] mb-2">
                Dazzling Light Displays
              </h3>
              <p className="text-gray-700">
                Stunning illuminations and festive decorations throughout the
                park
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="text-3xl">🎭</div>
            <div>
              <h3 className="text-xl font-bold text-[#3A4F30] mb-2">
                Live Entertainment
              </h3>
              <p className="text-gray-700">
                Musical performances, shows, and meet-and-greets with festive
                characters
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="text-3xl">🍔</div>
            <div>
              <h3 className="text-xl font-bold text-[#3A4F30] mb-2">
                Food & Markets
              </h3>
              <p className="text-gray-700">
                Delicious treats, hot chocolate, and festive shopping
                experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
