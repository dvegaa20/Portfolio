"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
        <svg
          style={{ filter: "contrast(125%) brightness(110%)" }}
          className="fixed z-[1] w-full h-full opacity-[35%]"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".7"
              numOctaves="3"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">

        <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[4vw] md:text-[30px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
            <span className="text-[#407BBF]">Personal Portfolio</span>
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[130px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
            Diego Vega<br />
            <span className="text-[#407BBF]">Software Engineer</span>
            <span className="font-inter text-[#407BBF]">.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
          >
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Portfolio
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Access my portfolio and view the details on my recent projects!
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Github
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Visit my github profile and checkout the source code of the projects I've created.
              </p>
            </div>
          </motion.div>

          <div className="flex gap-[15px] mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="/demo"
                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <span className="mr-2"> Check them out </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="https://github.com/dvegaa20"
                target="_blank"
                className="group rounded-full pl-[8px] min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="w-5 h-5 rounded-full bg-[#407BBF] flex items-center justify-center">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                </span>
                Github Profile
              </Link>
            </motion.div>
          </div>
        </main>

        <div
          className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
        ></div>

        <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
          id="gradient-canvas"
          data-transition-in
          className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
        ></motion.canvas>
        <div className="h-[60px] bg-[#1D2B3A] fixed bottom-0 z-20 w-full flex px-20 items-center space-x-40">
          <p className="text-white/80 text-base md:text-lg font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">
            Contact me through:
          </p>
          <a href="mailto:diego.vega.camacho@gmail.com">
            <svg
              className="w-[20px] opacity-80"
              viewBox="0 0 706 720"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_373)">
                <path
                  d="M360 294.546V433.965H553.746C545.238 478.802 519.708 516.767 481.417 542.294L598.254 632.95C666.327 570.115 705.6 477.823 705.6 368.186C705.6 342.66 703.31 318.112 699.054 294.55L360 294.546Z"
                  fill="white"
                />
                <path
                  d="M158.245 428.523L131.894 448.694L38.6191 521.348C97.8557 638.839 219.266 720.004 359.992 720.004C457.191 720.004 538.681 687.931 598.246 632.95L481.41 542.294C449.337 563.894 408.427 576.987 359.992 576.987C266.392 576.987 186.867 513.823 158.392 428.731L158.245 428.523Z"
                  fill="white"
                />
                <path
                  d="M38.6195 198.656C14.0752 247.09 0.00390625 301.746 0.00390625 360C0.00390625 418.254 14.0752 472.91 38.6195 521.344C38.6195 521.669 158.404 428.398 158.404 428.398C151.204 406.798 146.948 383.89 146.948 359.996C146.948 336.102 151.204 313.194 158.404 291.594L38.6195 198.656Z"
                  fill="white"
                />
                <path
                  d="M360 143.346C413.019 143.346 460.146 161.673 497.782 197.019L600.873 93.929C538.363 35.6752 457.202 0 360 0C219.273 0 97.8557 80.8367 38.6191 198.656L158.4 291.602C186.871 206.51 266.4 143.346 360 143.346Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_373">
                  <rect width="705.6" height="720" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/diegovegacam/">
            <svg
                className="w-[80px] text-white opacity-80 hidden lg:block"
                viewBox="0 0 291 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M213.883 7.24536C213.883 4.22963 216.39 1.78343 219.482 1.78343H284.051C287.144 1.78343 289.65 4.22963 289.65 7.24536V72.5695C289.65 75.5862 287.144 78.0314 284.051 78.0314H219.482C216.39 78.0314 213.883 75.5862 213.883 72.5695V7.24536Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.78564 65.6517H33.4055V55.2708H13.2285V15.665H1.78564V65.6517Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.4143 65.6517V31.2224H37.9704V65.6517H49.4143ZM43.6924 26.5216C47.6831 26.5216 50.167 23.8777 50.167 20.5716C50.0926 17.1942 47.6831 14.6247 43.7685 14.6247C39.8533 14.6247 37.2938 17.1942 37.2938 20.5716C37.2938 23.8777 39.7772 26.5216 43.6177 26.5216H43.6924Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M54.7278 65.6517H66.1718V46.4244C66.1718 45.3953 66.2461 44.3674 66.5488 43.6318C67.3756 41.5768 69.2585 39.4474 72.42 39.4474C76.5614 39.4474 78.2181 42.6058 78.2181 47.2313V65.6517H89.6609V45.9099C89.6609 35.3344 84.0146 30.4135 76.4853 30.4135C70.3122 30.4135 67.6015 33.8643 66.0955 36.2147H66.172V31.2224H54.728C54.8783 34.4532 54.7278 65.6517 54.7278 65.6517Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M105.805 15.665H94.3606V65.6517H105.805V54.4894L108.665 50.8889L117.624 65.6517H131.703L116.646 44.2797L129.821 29.739H116.044C116.044 29.739 106.633 42.7484 105.805 44.2909V15.665Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M162.307 51.2903C162.457 50.4059 162.683 48.7096 162.683 46.7922C162.683 37.8917 158.165 28.8567 146.27 28.8567C133.547 28.8567 127.674 38.9197 127.674 48.0463C127.674 59.3349 134.827 66.3852 147.324 66.3852C152.293 66.3852 156.885 65.6517 160.65 64.1092L159.144 56.5515C156.057 57.5754 152.895 58.0869 148.981 58.0869C143.635 58.0869 138.968 55.8933 138.591 51.2169L162.307 51.2882V51.2903ZM138.516 43.5482C138.817 40.6099 140.775 36.2758 145.669 36.2758C150.862 36.2758 152.068 40.9044 152.068 43.5482H138.516Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M190.93 15.665V32.9687H190.78C189.123 30.547 185.659 28.9311 181.068 28.9311C172.259 28.9311 164.505 35.9814 164.58 48.0249C164.58 59.1893 171.582 66.4596 180.315 66.4596C185.058 66.4596 189.575 64.4026 191.833 60.4363H192.06L192.511 65.6517H202.676C202.525 63.2279 202.373 59.0415 202.373 54.9295V15.665H190.93ZM190.93 49.7152C190.93 50.5954 190.855 51.4777 190.704 52.2113C190.027 55.3697 187.316 57.5724 184.004 57.5724C179.261 57.5724 176.174 53.7538 176.174 47.7315C176.174 42.077 178.81 37.5239 184.079 37.5239C187.617 37.5239 190.102 39.9467 190.78 42.9573C190.93 43.6195 190.93 44.3541 190.93 45.0143V49.7152Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M236.851 65.6109V31.1807H225.407V65.6109H236.851ZM231.129 26.4798C235.119 26.4798 237.603 23.8359 237.603 20.5319C237.529 17.1535 235.119 14.583 231.204 14.583C227.29 14.583 224.73 17.1535 224.73 20.5319C224.73 23.8359 227.214 26.4798 231.054 26.4798H231.129Z"
                  fill="#1E2B3A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M243.183 65.6109H254.627V46.3836C254.627 45.3546 254.701 44.3266 255.003 43.591C255.831 41.535 257.714 39.4057 260.875 39.4057C265.016 39.4057 266.673 42.563 266.673 47.1915V65.6109H278.116V45.8691C278.116 35.2937 272.47 30.3727 264.941 30.3727C258.767 30.3727 256.057 33.8235 254.551 36.1739H254.627V31.1807H243.183C243.333 34.4114 243.183 65.6109 243.183 65.6109Z"
                  fill="#1E2B3A"
                />
              </svg>
          </a>
        </div>
      </div>
    </AnimatePresence>
  );
}
