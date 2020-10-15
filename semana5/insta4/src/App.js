import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Charmander'}
          fotoUsuario={'https://vignette.wikia.nocookie.net/pkmnshuffle/images/f/f4/Charmander_%28Winking%29.png/revision/latest/scale-to-width-down/340?cb=20170410223423'}
          fotoPost={'https://picsum.photos/200/150?1'}
        />
        <Post
          nomeUsuario={'Bulbassaur'}
          fotoUsuario={'https://vignette.wikia.nocookie.net/pkmnshuffle/images/6/65/Bulbasaur_%28Winking%29.png/revision/latest/scale-to-width-down/128?cb=20170410223413'}
          fotoPost={'https://picsum.photos/200/150?2'}
        />
        <Post
          nomeUsuario={'Squirtle'}
          fotoUsuario={'https://vignette.wikia.nocookie.net/pkmnshuffle/images/2/24/Squirtle_%28Winking%29.png/revision/latest/scale-to-width-down/128?cb=20170410234534'}
          fotoPost={'https://picsum.photos/200/150?3'}
        />
      </div>
    );
  }
}

export default App;
