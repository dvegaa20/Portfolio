import { workExperience } from "@/data";
import { Button } from "@/components/ui/moving-borders";
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
            <div className="w-full pb-16 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(prng() * 10000) + 10000}
                        borderRadius="1.75rem"
                        className="flex-1 tex-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 hover:translate-x-2 transition duration-200 text-white">
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
            <Timeline data={timelineData} />
        </>
    );
}
