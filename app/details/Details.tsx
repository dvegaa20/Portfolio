"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCards";
import { projectData } from "@/data/projects";

export default function AppleCardsCarousel() {
  const cards = projectData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="heading">
        See more of
        <span className="text-purple"> My Projects</span>.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
