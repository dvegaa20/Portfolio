"use client";

import Image from "next/image";
import DVLogoDark from "@public/images/DV_LOGO_DARK.png";
import DVLogoLigth from "@public/images/DV_LOGO_LIGHT.png";
import { useDarkModeDetection } from "../hooks/useDarkModeDetection";

export default function Navbar() {
  const isDarkMode = useDarkModeDetection();

  return (
    <nav>
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <Image
              src={isDarkMode ? DVLogoDark : DVLogoLigth}
              alt="Logo"
              style={{ width: "125px", height: "auto" }}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Diego Vega
            </span>
          </a>
          <div className="flex items-center">
            <a href="tel:4426060404" className="mr-6 text-sm hover:underline">
              442-606-0404
            </a>
            <a href="#" className="text-sm  text-green-600 hover:underline">
              Contact Me
            </a>
          </div>
        </div>
      </nav>
      <nav className="border-t border-b border-white">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <ul className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}
