import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "./sections/Hero";
import Grid from "./sections/Grid";
import AppleCardsCarousel from "./sections/Details";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
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
