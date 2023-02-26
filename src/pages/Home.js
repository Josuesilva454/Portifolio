import React from 'react'
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Home.css";


const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>
         Oi, Meu nome e Josué
        </h2>
        <div className="prompt">
          <p>Desenvolvedor Backend Java, apaixado com a tecnologia</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
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
            Java, Spring boot java, JSF, kafka,Mysql, SqlServer, Docker.
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
