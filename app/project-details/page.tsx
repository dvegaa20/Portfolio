import AppleCardsCarousel from "@/components/Details";
import Footer from "@/components/Footer";

export default function ProjectDetails() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full h-full">
        <AppleCardsCarousel />
        <Footer />
      </div>
    </main>
  );
}
