import React from 'react';
import desafio from "../img/imagem.png";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div>
      <h1>Projeto mais desafiadores da mineração 2023</h1>
      <a href="https://example.com"> O Desafio: Rastreabilidade da origem do minério</a> 
      <div className='dev-img'>
        <img src={desafio} alt="Trabalho em equipe" />
        <p>O nome da equipe é Faromin. O desafio proposto foi realizado em conjunto com minha equipe Hackathon, que fornece ouro aos clientes.
<br></br>
A solução para o problema envolve análise geoquímica, extração, espectrometria, marcação a laser, transparência, plataforma de dados e certificação. Ao implementar essas etapas, conseguimos obter resultados e avaliar a viabilidade dos custos.
<br></br>
O diretor aprovou nosso projeto em 1º lugar.</p>
         
      </div>
    </div>
  );
};

export default Projects;

