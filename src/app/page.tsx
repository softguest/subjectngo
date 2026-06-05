import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SDGSection from "@/components/SDGSection";
import WhyStorytelling from "@/components/WhyStorytelling";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <SDGSection />
      <WhyStorytelling />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
