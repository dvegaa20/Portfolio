import { workExperience } from "@/data";
import React from "react";
import { Button } from "@/components/ui/MovingBorders";

function lcg(seed: number) {
  return function () {
    seed = (seed * 48271) % 2147483647;
    return seed / 2147483647;
  };
}

function Experience() {
  const prng = lcg(12345);

  return (
    <div id="experience">
      <h1 className="heading">
        My
        <span className="text-purple"> Work Experience</span>
      </h1>
      <h2 className="heading !text-sm mt-2">
        not technically a job, but close
      </h2>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
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
    </div>
  );
}

export default Experience;
