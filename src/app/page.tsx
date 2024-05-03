import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#121212]">
      <main className="flex min-h-screen flex-col container px-12 py-4">
        <HeroSection />
        <AboutMe/>
      </main>
    </div>
  );
}
