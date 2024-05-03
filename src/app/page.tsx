import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import MySkills from "@/components/MySkills";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#121212]">
      <main className="flex min-h-screen flex-col container px-5 sm:px-[12px] py-4">
        <HeroSection />
        <AboutMe/>
        <MySkills/>
      </main>
    </div>
  );
}
