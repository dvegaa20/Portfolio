import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";

interface SpotlightConfig {
    className: string;
    fill: string;
}

interface HeroProps {
    subheader: string;
    header: string;
    description: string;
    words: string[];
    spotlights?: SpotlightConfig[];
}

export default function Hero({ subheader, header, description, words, spotlights }: HeroProps) {
    const defaultSpotlights = [
        { className: "-top-40 -left-10 md:-left-32 md:-top-20 h-screen", fill: "white" },
        { className: "top-10 left-full h-[80vh] w-[50vw]", fill: "purple" },
        { className: "top-28 left-80 h-[80vh] w-[50vw]", fill: "blue" },
    ];

    const spots = spotlights || defaultSpotlights;

    return (
        <div className="pt-16 relative">
            {/* Spotlights div. */}
            <div>
                {spots.map((spot, idx) => (
                    <Spotlight
                        key={idx}
                        className={spot.className}
                        fill={spot.fill}
                    />
                ))}
            </div>

            {/* Main content of the hero section. */}
            <div className="absolute inset-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            {/* Text that appears in the hero section. */}
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        {subheader}
                    </h2>
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words={header}
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        {description}<FlipWords words={words} />
                    </p>
                </div>
            </div>
        </div>
    );
}
