import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HoverEffectCards from "@/components/HoverEffectCards";
import Instructors from "@/components/Instructors";
import TestimonalCards from "@/components/TestimonalCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.02] after:">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonalCards/>
      <HoverEffectCards/>
      <Instructors/>
      <Footer />
    </main>
  );
}
