import React, { Profiler } from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './images/Perfil.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ perfil } 
          nome="Astrodev" 
          descricao="Oi, eu sou o Noh Ah. Sou aluno da Labenu na turma Dumont. Estou adorando aprender programação com todos da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1161/1161806.svg"
          nome="E-mail:"
          descricao="meu@email.com"
        />

        <CardPequeno 
          imagem="https://www.flaticon.com/svg/static/icons/svg/2302/2302043.svg"
          nome="Endereço:"
          descricao="No meu quarto"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://miro.medium.com/max/3150/2*pq7dg0Y11VmKBSy6qiJdtQ.png" 
          nome="Labenu" 
          descricao="Curso Web Full-Stack" 
        />
        
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/843/843196.svg" 
          nome="Platanus Farmácia de Manipulação Ltda- EPP" 
          descricao="Estagiário no setor de manipulação" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
