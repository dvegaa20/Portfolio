import Hero from "@/components/sections/hero";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/data";

function lcg(seed: number) {
    return function () {
        seed = (seed * 48271) % 2147483647;
        return seed / 2147483647;
    };
}

export default function ExperiencePage() {
    const prng = lcg(12345);

    return (
        <>
            <Hero
                subheader="Professional Experience"
                header="A Glimpse Into My Professional Journey"
                description="Working as a"
                words={[
                    "Software Engineer",
                    "Full-Stack Developer",
                    "Mobile Developer",
                    "Tech Enthusiast",
                    "Problem Solver",
                ]}
                spotlights={[
                    { className: "-top-20 -left-10 md:-left-32 md:-top-10 h-screen", fill: "white" },
                    { className: "top-20 left-3/4 h-[80vh] w-[50vw]", fill: "purple" },
                    { className: "top-40 left-1/3 h-[80vh] w-[50vw]", fill: "blue" }
                ]}
            />
            <Timeline data={timelineData} />
        </>
    );
}
