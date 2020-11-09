import React from 'react';
import './App.css';
import axios from "axios";
import PaginaDeRegistro from './components/PaginaDeRegistro';
import PaginaDeLista from './components/PaginaDeLista';

class App extends React.Component {
  state = {
    paginaRegistro: true
  }

  mudarPagina = () => {
    this.setState({paginaRegistro: !this.state.paginaRegistro})
  }

  render() {
    const paginaExibida = () => {
      if (this.state.paginaRegistro) {
        return <PaginaDeRegistro botaoMudarPagina={this.mudarPagina}/>
      } else {
        return <PaginaDeLista botaoMudarPagina={this.mudarPagina}/>
      }
    }
    
    return(
      <div className="containerFlex">
        {paginaExibida()}
      </div>
    )
  }
}

export default App;