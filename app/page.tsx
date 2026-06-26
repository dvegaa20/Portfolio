import Hero from "@/components/sections/hero"
import Grid from "@/components/sections/grid";
import MagicButton from "@/components/ui/magic-button";
import { FaDownload } from "react-icons/fa";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero
        subheader="Let's Build Something Amazing Together."
        header="Simple, Clean, and Effective Digital Solutions"
        description="Hi, I'm Diego Vega a"
        words={[
          "Software Engineer",
          "Full-Stack Developer",
          "Mobile Developer",
          "Tech Enthusiast",
          "Machine Learning Learner",
        ]}
      />
      <div className="flex justify-center relative z-10 -mt-20 mb-20">
        <a href="/CV.pdf" download>
          <MagicButton
            title="Check out my Resume"
            icon={<FaDownload />}
            position="right"
          />
        </a>
      </div>
      <Grid />
      <Cta />
    </>
  );
}
