import React from 'react'
import axios from 'axios'

class PaginaDeRegistro extends React.Component {
    state = {
        inputName: "",
        inputEmail: ""
    }

    registrarUsuario = () => {
        const body = {
            name: this.state.inputName,
	        email: this.state.inputEmail
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: "nohah-jeong-dumont"
            }
        }).then((deuCerto) => {
            this.setState({inputName: "", inputEmail: ""});
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
        return(
            <div>
                <button onClick={this.props.botaoMudarPagina}>Ir para página de Lista</button>
                <div>
                    <p>Nome:</p>
                    <input value={this.state.inputName} onChange={this.onChangeInputName}/>
                    <p>E-mail:</p>
                    <input value={this.state.inputEmail} onChange={this.onChangeInputEmail}/>
                    <br/>
                    <button onClick={this.registrarUsuario}>Registrar</button>
                </div>
            </div>
        )
    }
}

export default PaginaDeRegistro