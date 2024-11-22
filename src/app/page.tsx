

import Authors from "@/components/authors";

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { TabsDemo } from "@/components/TabsDemo";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      
        <HeroSection />

       <TabsDemo/>
       <Authors/>
        <Footer />
      </main>
    </>
  );
}