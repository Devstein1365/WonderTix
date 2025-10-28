import React from "react";

const About = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
          alt="Happy Black family celebrating together"
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
    </>
  );
};

export default About;
