import Hero from "../components/Hero";
import About from "../components/About";
import EventHighlights from "../components/EventHighlights";
import TicketPreview from "../components/TicketPreview";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFEDED] flex flex-col font-sans">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Event Highlights */}
      <EventHighlights />

      {/* Ticket Categories Preview */}
      <TicketPreview />

      {/* Platform Features */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
