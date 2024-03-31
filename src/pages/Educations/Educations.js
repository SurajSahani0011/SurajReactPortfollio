import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoIosSchool } from "react-icons/io";
import './Educations.css'
const Educations = () => {
  return (
    <>
        <div className="education" id="education">
            <h2 className="col-12 mt-3 mb-1 text-center">Education Detail</h2>
            <hr/>
           
            <VerticalTimeline>
               <VerticalTimelineElement
   
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                             contentArrowStyle={{ borderRight: '7px solid  white' }}
                               date="2018 - 2022"
                             iconStyle={{ background: '#138781', color: '#fff' }}
                            icon={<IoIosSchool />}
                                  >
                            <h3 className="vertical-timeline-element-title">B.tech(ECE)</h3>
                             <h4 className="vertical-timeline-element-subtitle">ITM Maharajganj</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
   
   className="vertical-timeline-element--work"
   contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
      date="2022 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
   icon={<IoIosSchool />}
         >
   <h3 className="vertical-timeline-element-title">CodingNinja(Full Stack web developer program)</h3>
    <h4 className="vertical-timeline-element-subtitle">Delhi</h4>
</VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    </>
  )
}

export default Educations