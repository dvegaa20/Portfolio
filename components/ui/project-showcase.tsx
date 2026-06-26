"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { type ProjectData } from "@/data/projects";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/* -------------------------------------------------------------------------- */
/*  Blur Image (kept from old component)                                      */
/* -------------------------------------------------------------------------- */

const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*  Project Card                                                              */
/* -------------------------------------------------------------------------- */

function ProjectCard({ project }: { project: ProjectData }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Card thumbnail — triggers the dialog */}
      <button
        onClick={() => setOpen(true)}
        className="group rounded-3xl bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 cursor-pointer shrink-0"
      >
        {/* Gradient overlay */}
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />

        {/* Card text */}
        <div className="relative z-40 p-8">
          <p className="group-hover:translate-x-2 transition duration-200 text-white text-sm md:text-base font-medium font-sans text-left">
            {project.category}
          </p>
          <p className="group-hover:translate-x-2 transition duration-200 text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
            {project.title}
          </p>
        </div>

        {/* Background image */}
        <BlurImage
          src={project.src}
          alt={project.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </button>

      {/* Dialog — expanded project detail */}
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.15] p-0"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        {/* Hero banner inside dialog */}
        <div className="relative w-full h-48 md:h-64 rounded-t-3xl overflow-hidden">
          <BlurImage
            src={project.src}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[rgb(4,7,29)]" />

          {/* Floating header on top of hero */}
          <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
            <DialogHeader>
              <DialogDescription className="text-purple text-sm md:text-base font-medium">
                {project.category}
              </DialogDescription>
              <DialogTitle className="text-white text-2xl md:text-4xl font-bold">
                {project.title}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>

        {/* Sections */}
        <div className="px-6 md:px-10 pb-8 space-y-8">
          {/* ── Section 1: Overview ────────────────────────────────────── */}
          <section>
            <h3 className="text-white text-lg md:text-xl font-semibold font-sans mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-purple inline-block" />
              Overview
            </h3>
            <p className="text-white/80 text-sm md:text-base font-sans leading-relaxed">
              {project.des}
            </p>

            {/* Links */}
            {(project.linkProyect || project.linkRepo) && (
              <div className="flex flex-wrap gap-3 mt-6">
                {project.linkProyect && (
                  <a
                    href={project.linkProyect}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-purple border border-white/[0.2] rounded-full px-5 py-2.5 hover:bg-purple hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Project
                  </a>
                )}
                {project.linkRepo && (
                  <a
                    href={project.linkRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-purple border border-white/[0.2] rounded-full px-5 py-2.5 hover:bg-purple hover:text-white transition-colors duration-300"
                  >
                    <Github className="h-4 w-4" />
                    Repository
                  </a>
                )}
              </div>
            )}
          </section>

          {/* Divider */}
          <div className="h-px w-full bg-white/[0.1]" />

          {/* ── Section 2: Gallery ─────────────────────────────────────── */}
          <section>
            <h3 className="text-white text-lg md:text-xl font-semibold font-sans mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-purple inline-block" />
              {project.available
                ? "Gallery"
                : "Unfortunately, for this one there's no gallery to show. 😔"}
            </h3>

            {project.available && (
              <div className="relative">
                {(project.img.length > 1 || project.video) ? (
                  <Carousel
                    opts={{ align: "start" }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {project.video && (
                        <CarouselItem key="video">
                          <div className="aspect-video w-full rounded-2xl overflow-hidden">
                            <iframe
                              src={`https://www.youtube.com/embed/${project.video}`}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </CarouselItem>
                      )}
                      {project.img.map((image, imgIndex) => (
                        <CarouselItem key={`gallery-${imgIndex}`}>
                          <div className="rounded-2xl overflow-hidden">
                            <Image
                              src={image}
                              alt={`${project.category} visual ${imgIndex + 1}`}
                              height={800}
                              width={1200}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-black/50 border-white/20 text-white hover:bg-black/80 hover:text-white" />
                    <CarouselNext className="right-2 bg-black/50 border-white/20 text-white hover:bg-black/80 hover:text-white" />
                  </Carousel>
                ) : (
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={project.img[0]}
                      alt={`${project.category} visual`}
                      height={800}
                      width={1200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Divider */}
          <div className="h-px w-full bg-white/[0.1]" />

          {/* ── Section 3: Tech Stack ──────────────────────────────────── */}
          <section>
            <h3 className="text-white text-lg md:text-xl font-semibold font-sans mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-purple inline-block" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              {project.iconLists.map((icon, iconIndex) => (
                <div
                  key={`tech-${iconIndex}`}
                  className="flex items-center justify-center w-14 h-14 rounded-2xl border border-white/[0.1] bg-white/[0.05] p-2.5 hover:border-purple/50 hover:bg-purple/10 transition-colors duration-300"
                >
                  <Image
                    src={icon}
                    alt={`Technology ${iconIndex + 1}`}
                    height={40}
                    width={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* -------------------------------------------------------------------------- */
/*  Project Showcase (main export)                                            */
/* -------------------------------------------------------------------------- */

export function ProjectShowcase({
  projects,
}: {
  projects: ProjectData[];
}) {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="pl-4 basis-auto"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows — positioned bottom-right */}
        <div className="flex justify-end gap-2 mt-8 mr-6">
          <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full bg-white/[0.05] border border-white/[0.15] text-white hover:bg-purple/20 hover:border-purple/50 hover:text-white transition-colors duration-300" />
          <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full bg-white/[0.05] border border-white/[0.15] text-white hover:bg-purple/20 hover:border-purple/50 hover:text-white transition-colors duration-300" />
        </div>
      </Carousel>
    </div>
  );
}
