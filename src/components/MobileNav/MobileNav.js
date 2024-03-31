import React from 'react'
import { useState } from 'react';
import './MobileNav.css'
import { GiHamburgerMenu} from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import {FcHome} from 'react-icons/fc'
import { FcAbout } from "react-icons/fc";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdIndeterminateCheckBox } from "react-icons/md";
import { FcReading } from "react-icons/fc";
import { GoProjectRoadmap } from "react-icons/go";
// import { FaUser } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { Link} from 'react-scroll';
// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade'
const MobileNav = () => {
    const [open,setOpen] = useState(false)

    //handle open
    const handleOpen = () => {
        setOpen(!open);
    };

    //handle menu clicks
    const handleMenuClick = () => {
      setOpen(false);
    };
  return (
    <>
      <div className='mobile-nav'>
        <div className='mobile-nav-header'>
           {open ? (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen} />) : (<GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />)}
            
            <span className='mobile-nav-title'>Suraj Sahani Portfolio</span>
        </div>
        {open && (
          <div className='mobile-nav-menu'>
        <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100}onClick={handleMenuClick}><FcHome/>Home</Link>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
            <FcAbout/>About
            </Link>
            </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
          <Link  to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcReading />Education</Link>
           </div>
        </div>
       
        <div className="nav-item">
          <div className="nav-link">
          <Link  to="techstack" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><MdIndeterminateCheckBox />Tech Stack</Link></div>
        </div>
        
        <div className="nav-item">
          <div className="nav-link"> <Link  to="project" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><GoProjectRoadmap />Projects</Link></div>
        </div>
        {/* <div className="nav-item">
          <div className="nav-link"><FaUser />Testimonial</div>
        </div> */}
        <div className="nav-item">
          <div className="nav-link"><Link  to="workexperience" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><MdOutlineWorkOutline />Work Experience</Link></div>
        </div>
        <div className="nav-item">
          <div className="nav-link"><Link  to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcContacts />Contact</Link></div>
        </div>
       
      </div>
        </div>

        )}
       
      </div>
    </>
  )
}

export default MobileNav