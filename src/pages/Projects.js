import React from 'react';
import desafio from "../img/imagem.png";
import "../styles/NavBar.css";

const Projects = () => {
  return (
    <div>
      <h1>Projeto mais desafiadores</h1>
      <a href="https://example.com"> O Desafio: Rastreabilidade da origem do minério</a> 
      <div className='dev-img'>
        <img src={desafio} alt="Trabalho em equipe" />
      </div>
    </div>
  );
};

export default Projects;

