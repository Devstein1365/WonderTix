import Hero from "../components/Hero";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFEDED] flex flex-col font-sans">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
