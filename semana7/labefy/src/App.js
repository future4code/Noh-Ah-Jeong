import React from "react";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 304px auto;
  grid-template-rows: auto 160px;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  color: white;
`
const PlaylistContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  background-color: #121212;
`
const PlaylistDescriptionContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  background-color: #212121;
`
const MusicPlayerContainer = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  background-color: #212121;
  border-top: 1px solid #121212;
`
const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`

class App extends React.Component {
  state = {
    playlistsArray: [],
    playlistInput: "",
    selectedPlaylistName: "",
    selectedPlaylistTracks: [],
  };

  componentDidMount = () => {
    this.getAllPlaylists();
  };    

  getAllPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "nohah-jeong-dumont"
      }
    }).then((positive) => {
      this.setState({ playlistsArray: positive.data.result.list });
    }).catch((negative) => {
      alert("Não foi possível pegar a playlist.");
    });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.playlistInput
    };
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
      headers: {
        Authorization: "nohah-jeong-dumont"
      }
    }).then(positive => {
      this.setState({ playlistInput: "" });
      this.getAllPlaylists();
    }).catch(negative => {
      alert("Não foi possível criar a playlist, tente um nome diferente!");
    });
  };

  onChangePlaylistInput = (event) => {
    this.setState({ playlistInput: event.target.value });
  };

  onClickPlaylist = (event, name) => {
    this.setState({ selectedPlaylistName: name})
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${event}/tracks`, {
      headers: {
        Authorization: "nohah-jeong-dumont"
      }
    }).then(positive => {
      this.setState({ selectedPlaylistTracks: positive.data.result.tracks })
      console.log(this.state.selectedPlaylistTracks)
    }).catch(negative => {
      alert("Não foi possível selecionar a playlist!");
    });
  };

  handleUserDeletion = (playlistId) => {
    if (window.confirm("Tem certeza que deseja apagar a playlist?")) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
        headers: {
          Authorization: "nohah-jeong-dumont"
        }
      }).then(positive => {
        this.getAllPlaylists();
      }).catch(negative => {
        alert("Não foi possível apagar a playlist!");
      });
    }
  };

  render() {
    const renderedPlaylists = this.state.playlistsArray.map((playlist) => {
      return(
        <p key={playlist.id}>
          <span onClick={() => this.onClickPlaylist(playlist.id, playlist.name)}>
            {playlist.name}
          </span>
          <DeleteButton onClick={() => this.handleUserDeletion(playlist.id)}>
            X
          </DeleteButton>
        </p>
      );
    });

    const selectedPlaylist = this.state.selectedPlaylistTracks.map((track) => {
      return(
        <p>
          {track.name}
        </p>
      )
    })

    return(
      <MainContainer>
        <PlaylistContainer>
          {renderedPlaylists}
          <div>
            <input
              placeholder="Nome da Playlist"
              value={this.state.playlistInput}
              onChange={this.onChangePlaylistInput}
            />
            <button onClick={this.createPlaylist}>Criar Playlist</button>
          </div>
        </PlaylistContainer>

        <PlaylistDescriptionContainer>
          <h1>{this.state.selectedPlaylistName}</h1>
          <ul>{selectedPlaylist}</ul>
        </PlaylistDescriptionContainer>

        <MusicPlayerContainer>3</MusicPlayerContainer>
      </MainContainer>
    )
  }
};

export default App;