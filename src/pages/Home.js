import React from 'react'
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from '@material-ui/core';
import "../styles/Home.css";


const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>
         Oi. Meu nome é Josué tenho 25 anos, atualmente sou Instrutor de Ti, eu já desenvolvi diversas api como Spring boot java e nodejs.
        </h2>
        <div className="prompt">
          <p>Desenvolvedor Backend Java Spring Boot</p>
          <IconButton>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/josue-silva-b26a26163/', '_blank')} />
          </IconButton>
          <IconButton>
          <GithubIcon onClick={() => window.open('https://github.com/Josuesilva454', '_blank')} />
          </IconButton>
          <IconButton><EmailIcon/></IconButton>
      
        
        </div>
      </div>
      <div className="skills">
        <h1> Habilidades</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
            Reactjs, Html, Css, Redux.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
            Java, Spring boot java, JSF, kafka, Mysql, SqlServer, Docker.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java, php, Java Script, Python, Mysql.</span>
          </li>
        </ol>
      </div>
      
    </div>
  )
}

export default Home;
