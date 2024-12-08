import Image from "next/image";

interface Project {
  des: string;
  img?: string[];
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
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-10 rounded-3xl mb-4"
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
                  <a
                    href={project.linkRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center lg:text-sm text-xs text-purple border border-white/[0.2] rounded-full px-4 py-2 hover:bg-purple hover:text-white group transition-colors duration-300"
                  >
                    Repository
                  </a>
                </div>
              </div>
            )}
            {index === 1 && project.img && (
              <div>
                <div>
                  <h2 className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans pb-4">
                    Project Gallery
                  </h2>
                </div>
                <div className="space-y-10">
                  {project.img.map((image, imgIndex) => (
                    <Image
                      key={`project-image-${imgIndex}`}
                      src={
                        image ||
                        "https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt={`Project visual ${imgIndex}`}
                      height="2000"
                      width="2000"
                      className=""
                    />
                  ))}
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
                      className=""
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
          des: "StreakUp is an innovative iOS application designed to help you track and visualize your streaks for habits and routines, empowering you to build and maintain a healthier, more productive lifestyle. Whether you're working on daily fitness goals, developing new skills, or simply forming better habits, StreakUp provides an intuitive interface to monitor your progress, celebrate your milestones, and stay motivated to achieve your personal growth objectives. The app integrates sleek design with customizable features, ensuring it adapts perfectly to your unique needs and keeps you on track for long-term success.",
          img: [""],
          iconLists: ["/swift.svg", "/xcode.svg"],
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
          des: "DenTech is a comprehensive dental patient management system designed to streamline the workflow of dental professionals and enhance patient care. This cutting-edge web application enables dentists to efficiently manage their patient records, including appointments, treatment plans, and detailed medical histories, all within a secure and user-friendly platform. With features tailored to the needs of modern dental practices, DenTech simplifies administrative tasks, improves organization, and provides easy access to critical information, allowing dental teams to focus on delivering exceptional care. Whether for solo practitioners or multi-dentist clinics, DenTech is the ultimate tool for optimizing dental practice management.",
          img: [""],
          iconLists: [
            "/next.svg",
            "/re.svg",
            "/tail.svg",
            "/ts.svg",
            "/appwrite.svg",
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
          des: "Ingex Transportes is a powerful Fleet Management Dashboard designed to revolutionize decision-making processes for the company TDR Transportes. By meticulously analyzing maintenance and repair data, this interactive dashboard provides actionable insights to optimize operations and reduce costs. The platform features a predictive model that utilizes cutting-edge statistical methods to forecast the number of days until the next repair for each component, empowering fleet managers to implement timely maintenance strategies. Aligned with the client’s objective of reducing maintenance costs by 15%, Ingex Transportes delivers enhanced efficiency, improved reliability, and a data-driven approach to fleet management. It is an indispensable tool for achieving operational excellence in this transportation industry.",
          img: ["/p1.png"],
          iconLists: ["/re.svg", "/py.svg", "/dash.svg", "/tail.svg"],
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
          des: "Talent-360, developed collaboratively within a Software Development Department (BlackDot) adhering to CMMI standards, introduced a groundbreaking Odoo module focused on enhancing organizational well-being. This module empowers client organizations to create and manage comprehensive surveys for their employees, offering insights into workplace climate, compliance with NOM035 standards, and tailored evaluations through personalized questionnaires. By implementing custom models, views, and controllers for the survey forms, the team successfully streamlined the process, reducing survey handling time by 40 minutes per session. The project exemplifies seamless teamwork, adherence to industry best practices, and a commitment to driving meaningful improvements in employee satisfaction and organizational compliance.",
          img: ["/p1.png"],
          iconLists: ["/py.svg", "/odoo.svg", "/cmmi.svg"],
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
          des: "Iniciativa Climática de México, a collaborative project aimed at promoting sustainability, involved the development of a comprehensive platform to connect clients with suppliers offering eco-friendly products. The project encompassed the creation of a mobile app, a user-friendly landing page, and an efficient admin system. The mobile app and landing page were designed to showcase eco-friendly suppliers and facilitate easy access for users interested in making sustainable purchasing decisions. Meanwhile, the admin system enabled the management of suppliers and it's products. This platform plays a key role in fostering a green economy, empowering users to make environmentally conscious choices while supporting sustainable businesses.",
          img: ["/p1.png"],
          iconLists: [
            "/next.svg",
            "/ts.svg",
            "/tail.svg",
            "/firebase.svg",
            "/oauth.svg",
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
    title: "Development of MultiAgent Systems for Task Optimization.",
    src: "https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageContent: "",
    content: (
      <DummyContent
        project={{
          des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
          img: ["/p1.png", "", ""],
          iconLists: [
            "/re.svg",
            "/tail.svg",
            "/ts.svg",
            "/three.svg",
            "/c.svg",
          ],
          linkRepo: "https://github.com/adrianhajdin/ai_saas_app",
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
          des: "Cloudhub, a SaaS startup, required a dynamic and engaging front-end for its landing page to effectively showcase its services and attract potential customers. As part of the development team, I was responsible for designing and building the front end of the homepage, translating detailed Figma mockups into an interactive, responsive, and high-quality web experience. This process involved implementing modern web technologies to ensure a smooth and visually appealing user experience, optimizing the layout for different devices, and ensuring alignment with the startup's branding and core messaging. The final product provided visitors with an intuitive and seamless introduction to Cloudhub's services, enhancing both user engagement and conversion potential.",
          img: ["/p1.png"],
          iconLists: ["/re.svg", "/css.svg", "/js.svg", "/figma.svg"],
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
          des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
          img: ["/p1.png"],
          iconLists: ["/html.svg", "/css.svg", "/js.svg", "/node.svg"],
          linkRepo: "https://github.com/adrianhajdin/ai_saas_app",
          linkProyect: "",
        }}
      />
    ),
  },
];
