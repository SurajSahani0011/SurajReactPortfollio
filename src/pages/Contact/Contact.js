import React from 'react'
import './Contact.css'
import ContactUSimg from '../../assets/images/contactusimg.jpeg'
import {FaLinkedin,FaGithub,FaFacebook} from 'react-icons/fa6'
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';

const Contact = () => {
  return (
    <>
      <div className='contact' id="contact">
        <div className='card card0 border-0'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                    <div className='card1'>
                        <div className='row border-line'>
                        <LightSpeed>
                            <img src={ContactUSimg} alt='contact' className='image' />
                            </LightSpeed>
                        </div>
                    </div>    
                </div>
                <div className='col-lg-6 col-md-6'>
                <Rotate>
                 <div className='card d-flex card border-0 px-4 py-5'>
                    <div className='row'>
                        <div className='row'>
                            <h6>Contact With 
                               <FaLinkedin color='blue' size={30} className='ms-2'/>
                               <FaGithub color='black' size={30} className='ms-2'/>
                               <FaFacebook color='blue' size={30} className='ms-2'/>
                              
                            </h6>
                            </div>
                      <div className='row px-3 mb-4'>
                          <div className='line' />
                          <small className='or text-center'>OR</small>
                          <div className='line' />
                    </div>
                      <div className='row px-3'>
                           <input type='text' name='name' placeholder='Write your Name' className='mb-3'/>
                      </div>
                       <div className='row px-3'>
                           <input type='email' name='email' placeholder='Enter Your Email Address' className='mb-3'/>
                      </div>
                       <div className='row px-3'>
                           <textarea type='text' name='msg' placeholder='Write your Message' className='mb-3'/>
                      </div>
                      <div className='row px-3'>
                           <button className='button' type='submit'>SEND MESSAGE</button>
                      </div>
                </div>
                </div>
                </Rotate>
                </div>
            </div>
        </div>
      </div>
     
</>
  )
}

export default Contact