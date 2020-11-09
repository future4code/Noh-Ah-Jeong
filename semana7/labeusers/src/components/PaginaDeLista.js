import React from 'react'
import axios from 'axios'

const urlAPI = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headersAPI = {
    headers: {
        Authorization: "nohah-jeong-dumont"
    }
}

class PaginaDeLista extends React.Component {
    state = {
        listaDeRegistrados: [],
    }

    componentDidMount = () => {
        this.pegarTodosRegistros()
    }

    pegarTodosRegistros = () => {
        axios.get(urlAPI, headersAPI
        ).then((deuCerto) => {
            this.setState({listaDeRegistrados: deuCerto.data})
        }).catch((deuErrado) => {
            alert("Lista não carregou!")
        })
    }

    apagarRegistro = (id) => {
        axios.delete(`${urlAPI}/${id}`, headersAPI
        ).then((deuCerto) => {
            this.pegarTodosRegistros()
            alert("Registro foi apagado!")
        }).catch((deuErrado) => {
            alert("Registro NÃO foi apagado!")
        })
    }

    confirmarParaApagar = (id) => {
        const confirmado = window.confirm("Tem certeza de que deseja deletar?");
        if (confirmado) {
            axios.delete(`${urlAPI}/${id}`, headersAPI
            ).then((deuCerto) => {
            this.pegarTodosRegistros()
            alert("Registro foi apagado!")
            }).catch((deuErrado) => {
            alert("Registro NÃO foi apagado!")
            })
        } else {
            alert("Então tá tranquilo")
        }
    }

    render() {
        const listaRenderizado = this.state.listaDeRegistrados.map((registro) => {
            return(
                <ul key={registro.id} className="listaDeRegistros">
                    {registro.name}
                    <button onClick={() => this.confirmarParaApagar(registro.id)}>Apagar</button>
                </ul>
            )
        })
        
        return(
            <div>
                <button onClick={this.props.botaoMudarPagina}>Voltar para página de Registro</button>
                {listaRenderizado}
            </div>
        )
    }
}

export default PaginaDeLista




