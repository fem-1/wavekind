import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offerings from "@/components/Offerings";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Offerings />
      <TrustedBy />
      <Testimonials />
      <WhatsAppCTA />
      <CTA />
      <Footer />
    </main>
  );
}
