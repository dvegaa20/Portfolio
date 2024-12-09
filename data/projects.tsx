import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  des: React.ReactNode | string;
  img?: string[];
  video?: string;
  iconLists: string[];
  linkRepo: string;
  linkProyect: string;
}

const DummyContent = ({ project }: { project: Project }) => {
  return (
    <>
      {[...new Array(3)].map((_, index) => {
        return (
          <div
            key={`dummy-content-${index}`}
            className="bg-black-300 p-4 md:p-10 rounded-3xl mb-4"
          >
            {index === 0 && (
              <div>
                <h2 className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans pb-4">
                  Description
                </h2>
                <p className="text-white text-sm md:text-base font-medium font-sans text-left pb-2">
                  {project.des}
                </p>
                <div className="flex justify-start mt-4 space-x-2">
                  {project.linkProyect ? (
                    <a
                      href={project.linkProyect}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center lg:text-sm text-xs text-purple border border-white/[0.2] rounded-full px-4 py-2 hover:bg-purple hover:text-white group transition-colors duration-300"
                    >
                      Project
                    </a>
                  ) : null}
                  {project.linkRepo ? (
                    <a
                      href={project.linkRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center lg:text-sm text-xs text-purple border border-white/[0.2] rounded-full px-4 py-2 hover:bg-purple hover:text-white group transition-colors duration-300"
                    >
                      Repository
                    </a>
                  ) : null}
                </div>
              </div>
            )}
            {index === 1 && project.img && (
              <div>
                <div>
                  <h2 className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans pb-8">
                    Project Gallery
                  </h2>
                </div>
                <div className="space-y-10">
                  {project.img.length > 1 || project.video ? (
                    <Carousel>
                      <CarouselContent>
                        {project.video && (
                          <CarouselItem key="video">
                            <iframe
                              src={`https://www.youtube.com/embed/${project.video}`}
                              style={{
                                position: "relative",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                              }}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                              allowFullScreen
                            />
                          </CarouselItem>
                        )}
                        {project.img.map((image, imgIndex) => (
                          <CarouselItem key={`project-image-${imgIndex}`}>
                            <Image
                              src={image}
                              alt={`Visual ${imgIndex}`}
                              height="2000"
                              width="2000"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  ) : (
                    <Image
                      src={project.img[0]}
                      alt="Default or single image"
                      height="2000"
                      width="2000"
                    />
                  )}
                </div>
              </div>
            )}

            {index === 2 && (
              <div>
                <h2 className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans pb-4">
                  Tech Stack
                </h2>
                <div className="flex justify-evenly p-4">
                  {project.iconLists.map((icon, iconIndex) => (
                    <Image
                      key={`project-icon-${iconIndex}`}
                      src={icon}
                      alt={`Project icon ${iconIndex}`}
                      height="50"
                      width="50"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export const projectData = [
  {
    id: 1,
    category: "StreakUp",
    title: "iOS App To Track Your Streaks.",
    src: "https://images.unsplash.com/photo-1483488792196-78bedff29c21?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        project={{
          des: (
            <>
              <span className="text-purple underline underline-offset-4">
                StreakUp
              </span>{" "}
              is an innovative
              <span className="text-purple"> iOS application</span> designed to
              help you <span className="text-purple">track and visualize </span>
              your streaks for
              <span className="text-purple"> habits and routines</span>,
              empowering you to build and maintain a healthier, more productive
              lifestyle. Whether you're working on daily fitness goals,
              developing new skills, or simply forming better habits, StreakUp
              provides an intuitive interface to monitor your progress,
              celebrate your milestones, and stay motivated to achieve your
              <span className="text-purple"> personal growth objectives</span>.
              The app integrates sleek design with
              <span className="text-purple"> customizable features</span>,
              ensuring it adapts perfectly to your unique needs and keeps you on
              track for long-term success.
            </>
          ),
          img: [
            "https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ],
          video: "lEflo_sc82g",
          iconLists: ["./icons/swift.svg", "./icons/xcode.svg"],
          linkRepo: "",
          linkProyect: "",
        }}
      />
    ),
  },
  {
    id: 2,
    category: "DenTech",
    title: "Dental Patient Management System.",
    src: "https://images.unsplash.com/photo-1495573020741-8a2f372bbec3?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageContent: "",
    content: (
      <DummyContent
        project={{
          des: (
            <>
              <span className="text-purple underline underline-offset-4">
                DenTech
              </span>{" "}
              is a comprehensive{" "}
              <span className="text-purple">
                dental patient management system
              </span>{" "}
              designed to streamline the workflow of dental professionals and
              enhance patient care. This cutting-edge
              <span className="text-purple"> web application</span> enables
              dentists to efficiently manage their
              <span className="text-purple"> patient records</span>, including
              appointments, treatment plans, and detailed medical histories, all
              within a secure and user-friendly platform. With features tailored
              to the needs of modern dental practices, DenTech simplifies
              <span className="text-purple"> administrative tasks</span>,
              improves organization, and provides easy access to critical
              information, allowing dental teams to focus on delivering
              <span className="text-purple"> exceptional care</span>. Whether
              for solo practitioners or multi-dentist clinics, DenTech is the
              ultimate tool for optimizing dental practice management.
            </>
          ),
          img: [
            "https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ],
          video: "",
          iconLists: [
            "./icons/next.svg",
            "./icons/re.svg",
            "./icons/tail.svg",
            "./icons/ts.svg",
            "./icons/appwrite.svg",
          ],
          linkRepo: "",
          linkProyect: "",
        }}
      />
    ),
  },
  {
    id: 3,
    category: "Ingex Transportes",
    title: "Fleet Management Dashboard",
    src: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageContent: "",
    content: (
      <DummyContent
        project={{
          des: (
            <>
              <span className="text-purple underline underline-offset-4">
                Ingex Transportes
              </span>{" "}
              is a powerful{" "}
              <span className="text-purple">Fleet Management Dashboard</span>{" "}
              designed to revolutionize decision-making processes for the
              company
              <span className="text-purple"> TDR Transportes</span>. By
              meticulously analyzing maintenance and repair data, this
              interactive dashboard provides actionable insights to optimize
              operations and reduce costs. The platform features a
              <span className="text-purple"> predictive model</span> that
              utilizes cutting-edge statistical methods to forecast the number
              of days until the next repair for each component, empowering fleet
              managers to implement timely maintenance strategies. Aligned with
              the client&apos;s objective of{" "}
              <span className="text-purple">
                reducing maintenance costs by 15%
              </span>
              , Ingex Transportes delivers enhanced efficiency, improved
              reliability, and a data-driven approach to fleet management. It is
              an indispensable tool for achieving
              <span className="text-purple"> operational excellence</span> in
              this transportation industry.
              <br />
              <br />
              <span className="underline underline-offset-4">
                Disclaimer:
              </span>{" "}
              When first visiting the project, estimated time to load the data
              is arround 30 seconds.
            </>
          ),
          img: [
            "/ingex1.svg",
            "/ingex2.svg",
            "/ingex3.svg",
            "/ingex4.svg",
            "/ingex5.svg",
          ],
          video: "lEflo_sc82g",
          iconLists: [
            "./icons/re.svg",
            "./icons/py.svg",
            "./icons/dash.svg",
            "./icons/tail.svg",
            "./icons/figma.svg",
          ],
          linkRepo: "https://github.com/dvegaa20/TDR-Dashboard",
          linkProyect: "https://tdr-dashboard.vercel.app/",
        }}
      />
    ),
  },
  {
    id: 4,
    category: "BlackDot",
    title: "Software Development Department.",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageContent: "",
    content: (
      <DummyContent
        project={{
          des: (
            <>
              <span className="text-purple underline underline-offset-4">
                Talent-360
              </span>{" "}
              was developed collaboratively within a Software Development
              Department (BlackDot) adhering to CMMI standards, introduced a
              groundbreaking
              <span className="text-purple">Odoo module</span> focused on
              enhancing organizational well-being. This module empowers client
              organizations to create and manage comprehensive surveys for their
              employees, offering insights into
              <span className="text-purple"> workplace climate</span>,
              compliance with
              <span className="text-purple"> NOM035 standards</span>, and
              tailored evaluations through personalized questionnaires. By
              implementing{" "}
              <span className="text-purple">
                custom models, views, and controllers
              </span>{" "}
              for the survey forms, the team successfully streamlined the
              process, reducing survey handling time by 40 minutes per session.
              The project exemplifies seamless teamwork, adherence to industry
              best practices, and a commitment to driving meaningful
              improvements in
              <span className="text-purple"> employee satisfaction</span> and
              organizational compliance.
            </>
          ),
          img: ["/p1.png"],
          video: "",
          iconLists: ["./icons/py.svg", "./icons/odoo.svg", "./icons/cmmi.svg"],
          linkRepo: "https://github.com/Black-Dot-2024/cr-blackdot",
          linkProyect: "",
        }}
      />
    ),
  },
  {
    id: 5,
    category: "Iniciativa Climática de México",
    title: "Platform Showcasing Eco-Friendly Suppliers.",
    src: "https://images.unsplash.com/photo-1632404954707-4465b1411e9b?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageContent: "",
    content: (
      <DummyContent
        project={{
          des: (
            <>
              <span className="text-purple underline underline-offset-4">
                Iniciativa Climática de México
              </span>{" "}
              is a collaborative project aimed at promoting sustainability,
              involved the development of a comprehensive platform to connect
              clients with suppliers offering
              <span className="text-purple"> eco-friendly products</span>. The
              project encompassed the creation of a
              <span className="text-purple"> mobile app</span>, a user-friendly
              landing page, and an efficient admin system. The mobile app and
              landing page were designed to showcase eco-friendly suppliers and
              facilitate easy access for users interested in making sustainable
              purchasing decisions. Meanwhile, the admin system enabled the
              management of suppliers and it's products. This platform plays a
              key role in fostering a
              <span className="text-purple"> green economy</span>, empowering
              users to make environmentally conscious choices while supporting
              <span className="text-purple"> sustainable businesses</span>.
            </>
          ),
          img: [""],
          video: "/iOS.mp4",
          iconLists: [
            "./icons/next.svg",
            "./icons/ts.svg",
            "./icons/tail.svg",
            "./icons/firebase.svg",
            "./icons/oauth.svg",
            "./icons/figma.svg",
          ],
          linkRepo: "https://github.com/dvegaa20/Net-Zero-Citizens",
          linkProyect: "",
        }}
      />
    ),
  },
  {
    id: 6,
    category: "Multi-Agent Systems",
    title: "Multi-Agent System for Food Collection.",
    src: "https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageContent: "",
    content: (
      <DummyContent
        project={{
          des: (
            <>
              <span className="text-purple underline underline-offset-4">
                RappiAgents
              </span>{" "}
              is a system designed to solve a cooperative task in a {""}
              <span className="text-purple">
                dynamically changing 20x20 environment
              </span>
              . The system operates within a grid-like world where agents can
              move to adjacent cells if they are unoccupied. In this
              environment, <span className="text-purple"> food</span> can appear
              randomly in various cells, except for one special cell, which is
              considered a <span className="text-purple"> storage depot</span>.
              Agents can only know if food is present in a cell when they visit
              it. Initially, food is placed in random cells, and new food items
              may appear dynamically throughout the environment, with the
              exception of the storage depot. Agents can assume different roles,
              such as{" "}
              <span className="text-purple">explorers or gatherers</span>, and
              they
              <span className="text-purple"> communicate and cooperate</span> to
              efficiently find and collect food, optimizing their collective
              effort and adapting to the changing dynamics of the environment.
            </>
          ),
          img: ["/p1.png"],
          video: "",
          iconLists: [
            "./icons/py.svg",
            "./icons/unity.svg",
            "./icons/jupyter.svg",
          ],
          linkRepo: "https://github.com/dvegaa20/Unity",
          linkProyect: "",
        }}
      />
    ),
  },
  {
    id: 7,
    category: "Cloudhub",
    title: "SAAS Landing Page.",
    src: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageContent: "",
    content: (
      <DummyContent
        project={{
          des: (
            <>
              <span className="text-purple underline underline-offset-4">
                Cloudhub
              </span>
              is a SaaS startup, which required a dynamic and engaging
              <span className="text-purple"> front-end </span>
              for its landing page to effectively showcase its services and
              attract potential customers. As part of the development team, I
              was responsible for designing and building the front end of the
              homepage, translating detailed
              <span className="text-purple"> figma mockups</span> into an
              interactive, <span className="text-purple">responsive</span>, and
              high-quality web experience. This process involved implementing
              <span className="text-purple"> modern web technologies</span> to
              ensure a smooth and visually appealing user experience, optimizing
              the layout for different devices, and ensuring alignment with the
              startup's branding and core messaging. The final product provided
              visitors with an intuitive and seamless introduction to Cloudhub's
              services, enhancing both
              <span className="text-purple"> user engagement</span> and
              conversion potential.
            </>
          ),
          img: ["/p1.png"],
          video: "",
          iconLists: [
            "./icons/re.svg",
            "./icons/css.svg",
            "./icons/js.svg",
            "./icons/figma.svg",
          ],
          linkRepo: "https://github.com/dvegaa20/SAAS-LP",
          linkProyect: "https://saas-lp-navy.vercel.app/",
        }}
      />
    ),
  },
  {
    id: 8,
    category: "DispatchHealth",
    title: "Project Management WebApp.",
    src: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=2839&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageContent: "",
    content: (
      <DummyContent
        project={{
          des: (
            <>
              <span className="text-purple underline underline-offset-4">
                DispatchHealth
              </span>{" "}
              is a <span className="text-purple"> web application </span>
              designed to{" "}
              <span className="text-purple">
                improve project management efficiency
              </span>{" "}
              for work teams, streamlining workflows and enhancing collaboration
              across all levels. I played an active role in the development of
              this application, contributing to the design and implementation of
              features that help teams manage tasks, deadlines, and
              communication effectively. Using the
              <span className="text-purple"> agile methodology </span>, we
              ensured continuous feedback, rapid iteration, and a focus on
              delivering high-quality results on time. This approach
              <span className="text-purple"> helped to improve </span>team
              productivity, optimize project workflows, and ensure that the
              final product met the needs of all stakeholders, ultimately
              driving the success of the application in enhancing
              <span className="text-purple"> operational efficiency </span> for
              the teams using it.
            </>
          ),
          img: ["/p1.png"],
          video: "",
          iconLists: [
            "./icons/html.svg",
            "./icons/css.svg",
            "./icons/js.svg",
            "./icons/node.svg",
            "./icons/figma.svg",
          ],
          linkRepo: "https://github.com/dembA7/Systarch",
          linkProyect: "",
        }}
      />
    ),
  },
];
