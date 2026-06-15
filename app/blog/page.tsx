import Hero from "@/components/sections/hero";
import React from 'react'

export default function page() {
    return (
        <div>
            <Hero
                subheader="My Thoughts & Insights"
                header="Writing About Tech, Development, and Life"
                description="Exploring topics like"
                words={[
                    "Software Engineering",
                    "Web Development",
                    "Machine Learning",
                    "System Design",
                    "UI/UX Design",
                ]}
                spotlights={[
                    { className: "top-10 left-10 md:left-20 h-screen", fill: "blue" },
                    { className: "-top-20 right-10 h-[80vh] w-[50vw]", fill: "white" },
                    { className: "top-40 left-1/2 h-[80vh] w-[50vw]", fill: "purple" }
                ]}
            />
        </div>
    )
}
