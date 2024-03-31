import React from 'react'
import './Menus.css'
import ProfilePic from '../../assets/images/profilepic.png'
import {FcHome} from 'react-icons/fc'
import { FcAbout } from "react-icons/fc";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdIndeterminateCheckBox } from "react-icons/md";
import { FcReading } from "react-icons/fc";
import { GoProjectRoadmap } from "react-icons/go";
// import { FaUser } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { Link} from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
const Menus = ({toggle}) => {
  return (
     <>
     {toggle ? (
      <>
      <Zoom>
      <div className="navbar-profile-pic">
         <img src={ProfilePic} alt="profile pic"/>
         
      </div>
      </Zoom>
      <Fade left>
      <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100}><FcHome/>Home</Link>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAbout/>About
            </Link>
            </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
          <Link  to="education" spy={true} smooth={true} offset={-100} duration={100}><FcReading />Education</Link>
           </div>
        </div>
       
        <div className="nav-item">
          <div className="nav-link">
          <Link  to="techstack" spy={true} smooth={true} offset={-100} duration={100}><MdIndeterminateCheckBox />Tech Stack</Link></div>
        </div>
        
        <div className="nav-item">
          <div className="nav-link"> <Link  to="project" spy={true} smooth={true} offset={-100} duration={100}><GoProjectRoadmap />Projects</Link></div>
        </div>
        {/* <div className="nav-item">
          <div className="nav-link"><FaUser />Testimonial</div>
        </div> */}
        <div className="nav-item">
          <div className="nav-link"><Link  to="workexperience" spy={true} smooth={true} offset={-100} duration={100}><MdOutlineWorkOutline />Work Experience</Link></div>
        </div>
        <div className="nav-item">
          <div className="nav-link"><Link  to="contact" spy={true} smooth={true} offset={-100} duration={100}><FcContacts />Contact</Link></div>
        </div>
       
      </div>
      </Fade>
      
      </>
     ) : (
      <>
      <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link"> <Link to="home" spy={true} smooth={true} offset={-100} duration={100}><FcHome/></Link></div>
        </div>
        <div className="nav-item">
          <div className="nav-link"><Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAbout/>
            </Link></div>
        </div>
        <div className="nav-item">
          <div className="nav-link"><Link  to="education" spy={true} smooth={true} offset={-100} duration={100}><FcReading /></Link></div>
        </div>
       
        <div className="nav-item">
          <div className="nav-link"><Link  to="techstack" spy={true} smooth={true} offset={-100} duration={100}><MdIndeterminateCheckBox /></Link></div>
        </div>
       
        <div className="nav-item">
          <div className="nav-link"><Link  to="project" spy={true} smooth={true} offset={-100} duration={100}><GoProjectRoadmap /></Link></div>
        </div>
        {/* <div className="nav-item">
          <div className="nav-link"><FaUser title="Testimonial"/></div>
        </div> */}
        <div className="nav-item">
          <div className="nav-link"><Link  to="workexperience" spy={true} smooth={true} offset={-100} duration={100}><MdOutlineWorkOutline /></Link></div>
        </div>
        <div className="nav-item">
          <div className="nav-link"><Link  to="contact" spy={true} smooth={true} offset={-100} duration={100}><FcContacts /></Link></div>
        </div>
       
      </div>
      </>
     )}
    
     </>
  )
}

export default Menus