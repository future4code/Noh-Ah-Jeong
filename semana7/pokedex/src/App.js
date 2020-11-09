import React from "react";
import "./App.css";
import axios from "axios";

const urlBase = "https://pokeapi.co/api/v2/"

class App extends React.Component {
  state = {
    listaDePokemons: [],
    spriteDoPokemonSelecionado: "",
    numeroDoPokemonSelecionado: "",
    tipoUmDoPokemonSelecionado: "",
    data: ""
  };

  componentDidMount() {
    this.pegarPokemons();
  }

  pegarPokemons = () => {
    axios.get(urlBase + "pokemon/?limit=151").then((response) => {
      this.setState({listaDePokemons: response.data.results});
    });
  };

  onChangeSelect1 = (event) => {
    axios.get(urlBase + "pokemon/" + event.target.value).then((response) => {
      this.setState({
        spriteDoPokemonSelecionado: response.data.sprites.front_default,
        numeroDoPokemonSelecionado: response.data.id,
        tipoUmDoPokemonSelecionado: response.data.types["0"].type.name,
        tipoDoisDoPokemonSelecionado: response.data.types["1"].type.name,
        data: response.data
      });
    }).catch((error) => {

    });
  };

  render() {
    const optionList = this.state.listaDePokemons.map((pokemon) => {
      return <option key={pokemon.name}>{pokemon.name}</option>;
    });

    console.log(this.state.tipoUmDoPokemonSelecionado)
    console.log(this.state.data)

    return (
      <div className="App">
        <div className="Pokedex">
          <div className="PokedexPagina">
            <div className="JanelaTitulo">
              <select onChange={this.onChangeSelect1}>
                {optionList}
              </select>
              No. {this.state.numeroDoPokemonSelecionado}
            </div>

            <div className="JanelaImagem">
              <img src={this.state.spriteDoPokemonSelecionado}/>
            </div>
            
            <div className="JanelaTextoDescricao">
            </div>
          </div>

          <div className="PokedexPagina">
            <div className="JanelaDescricao">
              <p>Type: {this.state.tipoUmDoPokemonSelecionado} {this.state.tipoDoisDoPokemonSelecionado}</p>
              <p>b</p>
              <p>c</p>
              <p>d</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;