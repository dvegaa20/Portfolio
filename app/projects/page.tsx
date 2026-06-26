import React from 'react'
import Hero from "@/components/sections/hero";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { academicProjectData, professionalProjectData } from "@/data/projects";
import { Cta } from '@/components/sections/cta';

export default function ProjectsPage() {
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
            <div className='pb-24 space-y-24'>
                <section>
                    <div className="max-w-7xl mx-auto px-4 mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Work</h2>
                        <p className="text-neutral-400 text-lg">Real-world software built for global clients and personal entrepreneurial startups.</p>
                    </div>
                    <ProjectShowcase projects={professionalProjectData} />
                </section>

                <section>
                    <div className="max-w-7xl mx-auto px-4 mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Academic Projects</h2>
                        <p className="text-neutral-400 text-lg">Research, university assignments, and educational prototypes.</p>
                    </div>
                    <ProjectShowcase projects={academicProjectData} />
                </section>
            </div>
            <Cta />
        </>
    )
}
