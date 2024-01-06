import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import MySkills from './MySkills'

export default function NavBar() {
    const [navActive, setNavActive] = useState(false)

    const toggleNav = () => {
        setNavActive(!navActive)
    }
    const closeMenu = () => {
        setNavActive(false)
    }
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500){
                closeMenu;
            }
        }
        window.addEventListener("resize", handleResize);
   
  return () => {
    window.removeEventListener("resize", handleResize)
  }
}, [])

useEffect(() => {
    if(window.innerWidth <= 1200){
        closeMenu
    }
}, [])
return (

   

     <nav className={`navbar ${navActive ? "active" : ""}`}>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/MySkills"
              className="navbar--content"
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="ContactMe"
        className="btn btn-outline-primary"
      >
        Get In Touch
      </Link>
    </nav>
    )
}
 