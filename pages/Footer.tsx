import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { LinkPreview } from "@/components/ui/LinkPreview";

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s bring your
          <span className="text-purple"> digital vision</span> to life, work
          with me to achieve your goals.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s create something extraordinary.
        </p>
        <a href="mailto:diego.vega.camacho@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center space-y-6 md:space-y-0">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Diego Vega
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <LinkPreview
              key={profile.id}
              url={profile.url}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 font-bold"
            >
              <img
                src={profile.img}
                alt={profile.id.toString()}
                width={20}
                height={20}
              />
            </LinkPreview>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
