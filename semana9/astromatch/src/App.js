import React, { useState } from 'react';
import './App.css';
import Profiles from './components/Profiles/Profiles';
import Matches from './components/Matches/Matches';

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

  return (
    <div className="App">
      {chooseContainer()}
    </div>
  );
}

export default App;
