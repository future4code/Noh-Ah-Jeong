import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components"

const Formulario = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'Charmander',
        fotoUsuario: 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/f/f4/Charmander_%28Winking%29.png/revision/latest/scale-to-width-down/340?cb=20170410223423',
        fotoPost: 'https://picsum.photos/200/150?1'
      },
      {
        nomeUsuario: 'Bulbassaur',
        fotoUsuario: 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/6/65/Bulbasaur_%28Winking%29.png/revision/latest/scale-to-width-down/128?cb=20170410223413',
        fotoPost: 'https://picsum.photos/200/150?2'
      },
      {
        nomeUsuario: 'Squirtle',
        fotoUsuario: 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/2/24/Squirtle_%28Winking%29.png/revision/latest/scale-to-width-down/128?cb=20170410234534',
        fotoPost: 'https://picsum.photos/200/150?3'
      }
    ],

    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost,
    }

    const novoPosts = [...this.state.posts, novoPost]

    this.setState({ posts: novoPosts })
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <div className={'app-container'}>
          <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        </div>
      )
    })

    return (
      <div>
        <Formulario>
          <input
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do usuário"}
          />
          <input
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link da imagem do usuário"}
          />
          <input
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link da imagem do post"}
          />
          <button onClick={this.adicionaPost}>Postar</button>
        </Formulario>
        <div>
          {listaDePosts}
        </div>
      </div>
    )
  };

}

export default App;
