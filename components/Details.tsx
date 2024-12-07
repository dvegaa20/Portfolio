"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCards";
import { projectData } from "@/data/projects";

export default function AppleCardsCarousel() {
  const cards = projectData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="flex items-center justify-center">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Get to know see more of
          <span className="text-purple"> my projects</span>.
        </h2>
        <a
          href="/"
          className="flex items-center lg:text-sm text-xs text-purple border border-white/[0.2] rounded-full px-4 py-2 transition-colors duration-300 hover:bg-purple hover:text-white group"
        >
          Go Back
        </a>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
