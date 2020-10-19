import React from 'react';
import './App.css';
import Etapa1 from './Etapa1'
import Etapa2 from './Etapa2'
import Etapa3 from './Etapa3'
import Final from './Final'

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        break
    }
  }

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  render() {
    const etapas = this.state.etapa < 4 ?
      <div>
        {this.renderizarEtapa()}
        <br/>
        <button onClick={this.irParaProximaEtapa} >Próxima Etapa</button>
      </div> :
      <div>
        {this.renderizarEtapa()}
      </div>

    return (
      <div>
        {etapas}
      </div>
    );
}
}
export default App;
