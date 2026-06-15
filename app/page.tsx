import Hero from "@/components/sections/hero"
import Grid from "@/components/sections/Grid";

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
      <Grid />
    </>
  );
}
