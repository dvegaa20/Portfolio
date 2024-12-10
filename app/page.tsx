import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "./hero/Hero";
import Grid from "./grid/Grid";
import AppleCardsCarousel from "./details/Details";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import { navItems } from "@/data";

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
