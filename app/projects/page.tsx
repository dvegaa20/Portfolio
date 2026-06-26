import React from 'react'
import Hero from "@/components/sections/hero";
import { Carousel, Card } from "@/components/ui/apple-cards";
import { projectData } from "@/data/projects";
import { Cta } from '@/components/sections/cta';

export default function ProjectsPage() {
    const cards = projectData.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <>
            <Hero
                subheader="Discover My Work"
                header="A Glimpse Into My Digital Creations"
                description="I've built a"
                words={[
                    "SaaS Platform",
                    "Mobile Application",
                    "Web Application",
                    "Machine Learning Model",
                    "Digital Solution",
                ]}
                spotlights={[
                    { className: "-top-10 left-10 md:left-32 md:-top-10 h-screen", fill: "purple" },
                    { className: "top-0 left-1/2 h-[80vh] w-[50vw]", fill: "white" },
                    { className: "top-28 left-1/4 h-[80vh] w-[50vw]", fill: "blue" }
                ]}
            />
            <div className='pb-16 w-[98vw] relative left-1/2 -translate-x-1/2'>
                <Carousel items={cards} />
            </div>
            <Cta />
        </>
    )
}
