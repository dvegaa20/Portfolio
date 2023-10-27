"use client";

import Image from "next/image";
import DVLogoDark from "@public/images/DV_LOGO_DARK.png";
import DVLogoLigth from "@public/images/DV_LOGO_LIGHT.png";
import { useDarkModeDetection } from "../hooks/useDarkModeDetection";

export default function Navbar() {
  const isDarkMode = useDarkModeDetection();

  return (
    <nav>
      <ul className="flex justify-between items-center">
        <Image src={isDarkMode ? DVLogoDark : DVLogoLigth} alt="Logo" />
        <li>Home</li>
        <li>About</li>
        <li>Hola</li>
      </ul>
    </nav>
  );
}
