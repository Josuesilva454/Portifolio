import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School'


const Experience = () => {
  return (
    <div>
      <div className='experience'>
     <VerticalTimeline lineColor='blue'>
      <VerticalTimelineElement className='vertical-timeline-element--work' 
      date="Fevereiro 2013"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
 > <h3 className="vertical-timeline-element-title">Monitor Ti</h3>
 <h4 className="vertical-timeline-element-subtitle">Belo Horizonte, MG</h4>
 <p>
   User Experience, Visual Design
 </p></VerticalTimelineElement>
 <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Estagiario Ti</h3>
    <h4 className="vertical-timeline-element-subtitle">Belo Horizonte, MG</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Estagiario Suporte Tecnico</h3>
    <h4 className="vertical-timeline-element-subtitle">Belo Horizonte, MG</h4>

    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2020 - 2023"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}


  >
    <h3 className="vertical-timeline-element-title">Graduação Análise e Desenvolvimento de Sistema</h3>
    <h4 className="vertical-timeline-element-subtitle">Tecnologo</h4>
    
    <p>
      frontend, Modelagem de software, Backend, Metodologia Ágeis
    </p>
  </VerticalTimelineElement>
  
     </VerticalTimeline>
     
      </div>
    </div>
  )
}

export default Experience
