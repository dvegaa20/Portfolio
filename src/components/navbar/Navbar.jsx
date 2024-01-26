import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Logo from '../../assets/logo.svg'
import './navbar.css'

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
    <div className="me__navbar">
      <div className="me__navbar-links-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="me__navbar-links">
        <div className="me__navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="me__navbar-download">
        <button type='button'>Download CV</button>
      </div>
      <div className="me__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="me__navbar-menu-container scale-up-center">
            <div className="me__navbar-menu__container-links">
              <Menu />
              <div className="me__navbar-menu__container-links-download">
                <button type='button'>Start for free</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar