import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
  state = {
    listaUsuarios: [],
    inputName: "",
    inputEmail: ""
  }

  componentDidMount = () => {
    this.pegarTodosUsuarios()
  }

  pegarTodosUsuarios = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: "nohah-jeong-dumont"
      }
    }).then((deuCerto) => {
      this.setState({listaUsuarios: deuCerto.data.result})
    }).catch((deuErrado) => {
      console.log(deuErrado.message)
    })
  }

  registrarUsuario = () => {
    const body = {
      "name": this.state.inputName,
	    "email": this.state.inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: "nohah-jeong-dumont"
      }
    }).then((deuCerto) => {
      this.setState({inputName: "", inputEmail: ""});
      this.pegarTodosUsuarios();
      alert("Registro deu certo!")
    }).catch((deuErrado) => {
      alert("Registro deu errado!")
    })
  }

  onChangeInputName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  render() {
    const listaRenderizada = this.state.listaUsuarios.map((usuario) => {
      return <p key={usuario.id}>{usuario.name}</p>
    })
    return(
      <div>
        <button onClick={this.props.botaoParaLista}>Ir para página de Lista</button>
        <div>
          <p>Nome:</p>
          <input value={this.state.inputName} onChange={this.onChangeInputName}/>
          <p>E-mail:</p>
          <input value={this.state.inputEmail} onChange={this.onChangeInputEmail}/>
          <br/>
          <button onClick={this.registrarUsuario}>Salvar</button>
        </div>
        {listaRenderizada}
      </div>
    )
  }
}

export default App;