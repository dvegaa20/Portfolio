import React from "react";
import { projects } from "@/data";
import { CardContainer, CardBody, CardItem } from "./ui/CardEffect";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

function Projects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of
        <span className="text-purple"> recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, linkRepo, linkProyect }) => (
            <div
              key={id}
              className="lg:min-h-[35rem] lg:h-[25rem] h-[35rem] flex items-center justify-center sm:w-96  w-[80vw] mx-24"
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-[#13162d] relative group/card border-white/[0.15] w-auto sm:w-[32rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {des}{" "}
                    <span className="underline underline-offset-4">
                      <a href={linkRepo}>Click here to view more.</a>
                    </span>
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-8"
                  >
                    <Image
                      src={img}
                      height="1000"
                      width="1000"
                      className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-14">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black 
                        lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center relative z-30">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={linkProyect ? linkProyect : "/project-details"}
                        target="__blank"
                        className="flex items-center lg:text-sm text-xs text-purple border border-white/[0.2] rounded-full px-4 py-2 hover:bg-purple hover:text-white group"
                      >
                        Check it out
                        <FaLocationArrow className="ms-3 h-4 w-4 sm:h-2.5 sm:w-2.5 text-[#CBACF9] transition-colors duration-300 group-hover:text-white sm:flex sm:items-center sm:justify-center" />
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
