import React from 'react'
import './Projects.css'
import EcommerceProjectPic from '../../assets/images/Ecommerce_project.jpg'
import Habbittrackpic from '../../assets/images/HabbitTrackerpic.jpg'
import Spin from 'react-reveal/Spin';
const Projects = () => {
  return (
    <>
        <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center">TOP RECENT PROJECTS</h2>
           <hr/>
           <p className="pb-3 text-center">
              👉Here are my top 3 recent project with live links and source code.
           </p>
           {/*  card design */}
           
           <div className="row" id="ads">
           <Spin>
                <div className="col-md-4">
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Front-end</span>
                            <img src={EcommerceProjectPic} alt="project1" />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">React</span>
                        <span className="card-detail-badge">Bootstrap</span>
                        {/* <span className="card-detail-badge">React</span>
                        <span className="card-detail-badge">MongoDb</span> */}
                        </div>
                        <div className="card-body">
                          <div className="ad-title m-auto text-center">
                            <h5 className="text-uppercase">Ecommerce Website</h5>
                          </div>
                          <a className="ad-btn" href="https://fit-grocery.vercel.app/">View</a>
                        </div>
                    </div>
                </div>
                 </Spin>
                 <Spin>

                <div className="col-md-4">
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Front-end</span>
                            <img src={Habbittrackpic} alt="project1" />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">React</span>
                         <span className="card-detail-badge">BootStrap</span>
                         {/* <span className="card-detail-badge">React</span>
                        <span className="card-detail-badge">MongoDb</span>  */}
                        </div>
                        <div className="card-body">
                          <div className="ad-title m-auto text-center">
                            <h5 className="text-uppercase">Habbit Tracker website</h5>
                          </div>
                          <a className="ad-btn" href="https://hattbi-trackerprojrct.vercel.app/">View</a>
                        </div>
                    </div>
                </div>
                </Spin>
                <Spin>
                <div className="col-md-4">
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Full stack</span>
                            <img src={EcommerceProjectPic} alt="project1" />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Node</span>
                        <span className="card-detail-badge">Express</span>
                        <span className="card-detail-badge">React</span>
                        <span className="card-detail-badge">MongoDb</span>
                        </div>
                        <div className="card-body">
                          <div className="ad-title m-auto text-center">
                            <h5 className="text-uppercase">Techinfoyt shopping website</h5>
                          </div>
                          <a className="ad-btn" href="#">View</a>
                        </div>
                    </div>
                </div>
                </Spin>
           </div>
          
           

        </div>
    </>
  )
}

export default Projects