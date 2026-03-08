import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offerings from "@/components/Offerings";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Offerings />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
