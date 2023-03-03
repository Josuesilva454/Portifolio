import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const Experience = () => {
  return (
    <div>
      <div className='experience'>
     <VerticalTimeline lineColor='blue'>
      <VerticalTimelineElement className='vertical-timeline-element--work' 
      date="Fevereiro 2013"
      icon={<WorkIcon />}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
 > <h3 className="vertical-timeline-element-title">Monitor Ti</h3>
 <h4 className="vertical-timeline-element-subtitle">Belo Horizonte, MG</h4>
 <p>
 Pacote office, Web Designer, coreldraw, Montagem de Computadores e Desmontagem de Computadores, Formatação.
 </p></VerticalTimelineElement>
 <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022"
    icon={<WorkIcon />}

    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Estagiario Tecnologia Educação Infantil</h3>
    <h4 className="vertical-timeline-element-subtitle">Belo Horizonte, MG</h4>
    <p>
Acompanhará os docentes do Componente
Curricular Linguagem Digital. O estagiário, ao acompanhar
os docentes, fará atendimentos individuais e coletivos aos
discentes. Além disso, fará a verificação prévia da rede de
dados e dos computadores com defeito para acionar o
Suporte Técnico de Informática.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2022"
    icon={<WorkIcon />}

    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Estagiario Suporte Tecnico</h3>
    <h4 className="vertical-timeline-element-subtitle">Belo Horizonte, MG</h4>

    <p>
    Atividades: realizar a monitoração de backup em nuvem;
monitorar os servidores espelhados; resolver
problemas de suporte nível 1; instalar e configurar banco de
dados.

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2020 - 2023"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}


  >
    <h3 className="vertical-timeline-element-title">Graduação Análise e Desenvolvimento de Sistema</h3>
    <h4 className="vertical-timeline-element-subtitle">tecnólogo</h4>
    
    <p>
      Frontend, Backend, Modelagem de software, 
Gestão e qualidade de software, Inteligencia artificial, Sistemas computacionais e segurança, Engenharia de software.
    </p>
  </VerticalTimelineElement>
  
     </VerticalTimeline>
     
      </div>
    </div>
  )
}

export default Experience
