import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Logo from '../../assets/logo.svg'
import './navbar.css'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";

const Menu = () => (
  <>
  <p><a href="about">About</a></p>
  <p><a href="skills">Skills</a></p>
  <p><a href="portfolio">Portfolio</a></p>
  <p><a href="testimonials">Tesimonial</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='pw__header'>
      <div className='pw__navbar'>
        <div className='pw__logo-links'>
          <img src={Logo} alt="" />
          <Menu />
          <div className='pw__social'>
            <a href="https://www.linkedin.com/in/rafael-oliveira-4b6b8a1b5/"><FaLinkedin /></a>
            <a href="https://www.linkedin.com/in/rafael-oliveira-4b6b8a1b5/"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rafael-oliveira-4b6b8a1b5/"><SiGmail /></a>
            <a href="https://www.linkedin.com/in/rafael-oliveira-4b6b8a1b5/"><GrInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar