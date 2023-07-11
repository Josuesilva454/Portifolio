import React from 'react';
import desafio from "../img/imagem.png";
import "../styles/NavBar.css";


const Projects = () => {
  return (
    <div>
      <h1>Projeto mais desafiadores</h1>
      <a>Rastreabilidade da origem do minério</a> 
      <div className='dev-img'><img src={desafio}></img></div>
   
    </div>
  )
}

export default Projects;
