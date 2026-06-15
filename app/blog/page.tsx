import Hero from "@/components/sections/hero";
import React from 'react'

export default function page() {
    return (
        <div>
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
        </div>
    )
}
