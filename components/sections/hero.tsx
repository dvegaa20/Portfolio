import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/magic-button";
import { FaPhoneAlt } from "react-icons/fa";
import { FlipWords } from "@/components/ui/flip-words";

interface HeroProps {
    subheader: string;
    header: string;
    description: string;
    words: string[];
}

export default function Hero({ subheader, header, description, words }: HeroProps) {
    return (
        <div className="py-16">
            {/* Spotlights div. */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="top-10 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/* Main content of the hero section. */}
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
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
                    <a href="" download>
                        <MagicButton
                            title="Contact Me"
                            icon={<FaPhoneAlt />}
                            position="left"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
