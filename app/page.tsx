import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeatureSection />
      <HowItWorks />
      <Trust />
      <CTA />
      <Footer />
    </main>
  );
}
