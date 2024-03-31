import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './WorkExp.css'
import { MdOutlineWorkOutline } from "react-icons/md";
const WorkExp = () => {
  return (
   <>
      <div className='work' id="workexperience">
        <div className='container work-exp'>
          <h2 className="col-12 mt-3 mb-1 text-center">Work Experience and Internship</h2>
            <hr/>
            <VerticalTimeline lineColor='#1e1e2c'>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 6Month"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<MdOutlineWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title">Test Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Gautam solar pvt ltd.</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 6Month"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<MdOutlineWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title">INTERNSHIP(Web Developmernt)</h3>
    <h4 className="vertical-timeline-element-subtitle">OctaNet Services PVT LTD, (Duration: 2month)
</h4>
    <p>
      <a href='https://certificate.givemycertificate.com/c/8b99b6fb-2251-4210-80bd-778717705f5f'>Cirtificate</a>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 6Month"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<MdOutlineWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title">INTERNSHIP(Mern)</h3>
    <h4 className="vertical-timeline-element-subtitle">Flow Services and Technologies, (Duration: 3month)</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
            </VerticalTimeline>
          

        </div>
      </div>
   </>
  )
}

export default WorkExp