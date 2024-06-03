import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
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
      <img
        className="block mx-auto"
        src={"https://images.unsplash.com/photo-1716386480038-1e375da14e1a?q=80&w=876&auto=format&fit=crop"}
        alt="Unsplash"
      />
    </main>
  );
}
