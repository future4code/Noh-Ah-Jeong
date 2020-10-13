import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1><img className="icone" src={logo} alt="logo da LabTube" />Lab Tube</h1>
            <input className="campo-de-busca" type="text" placeholder="Pesquisar" id="campoDeBusca" />
            <button className="botao-do-login">FAZER LOGIN</button>
            
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr />
                    <li className="botoes-meunu-vertical">Biblioteca</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="Imagem do vídeo 1" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="Imagem do vídeo 2" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="Imagem do vídeo 3" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="Imagem do vídeo 4" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="Imagem do vídeo 5" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="Imagem do vídeo 6" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="Imagem do vídeo 7" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="Imagem do vídeo 8" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
