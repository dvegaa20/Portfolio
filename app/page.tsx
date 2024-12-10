import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import AppleCardsCarousel from "@/components/Details";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <AppleCardsCarousel />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
