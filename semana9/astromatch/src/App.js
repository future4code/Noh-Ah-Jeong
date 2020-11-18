import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import Profiles from './components/Profiles/Profiles';
import Matches from './components/Matches/Matches';
import { URL_Base } from './constants/URLs'

function App() {
  const [renderedContainer, setRenderedContainer] = useState("profiles")

  const chooseContainer = () => {
    switch (renderedContainer) {
      case "profiles":
        return (
          <Profiles
            goToMatches={goToMatches}
          />
        );
      case "matches":
        return (
          <Matches
            goToProfiles={goToProfiles}
          />
        );
      default:
        return <div>Erro: página não encontrada</div>;
    }
  }

  const goToMatches = () => {
    setRenderedContainer("matches")
  }

  const goToProfiles = () => {
    setRenderedContainer("profiles")
  }

  const clear = () => {
    axios
      .put(`${URL_Base}/clear`)
      .then(response => console.log("Deu clear."))
      .catch(error => console.log("Erro ao dar clear."))
  }

  return (
    <div className="App">
      {chooseContainer()}
      <br />
      <button onClick={clear}>Resetar</button>
    </div>
  );
}

export default App;
