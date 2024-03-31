import React from 'react'
import './About.css'
import ProfilePic from '../../assets/images/profilepic.png'
import Jump from 'react-reveal/Jump'
const About = () => {
  return (
    <>
    <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
          <img src={ProfilePic} alt="profile pic"/>
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
            My name is Suraj Sahani. I am from Nautanwa(UP). I have
            completed my B.tech(ECE) from ITM maharajganj with 74%
            and I have done Full Stack Developer Program from Coding
            Ninja. I am looking for a job in softwere developement field.

            </p>
          </div>
        </div>
      </div>
      </Jump>
    </>
  )
}

export default About