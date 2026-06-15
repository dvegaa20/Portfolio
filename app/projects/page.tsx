import React from 'react'
import Hero from "@/components/sections/hero";
import { Carousel, Card } from "@/components/ui/apple-cards";
import { projectData } from "@/data/projects";

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
                    "Saas",
                    "Full-Stack Developer",
                    "Mobile Developer",
                    "Tech Enthusiast",
                    "Machine Learning Learner",
                ]}
            />
            <div className='pb-16'>
                <Carousel items={cards} />
            </div>
        </>
    )
}
