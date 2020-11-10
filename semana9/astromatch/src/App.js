import React, { useState } from 'react';
import './App.css';

import ProfilesScreen from './screens/ProfilesScreen/ProfilesScreen'
import MatchesScreen from './screens/MatchesScreen/MatchesScreen'

function App() {
	const [screen, setScreen] = useState("profiles")

	const chooseScreen = () => {
		switch (screen) {
			case "profiles":
				return (
					<ProfilesScreen
					// goToMatchesScreen={this.goToMatchesScreen}
					/>
				);
			case "matches":
				return (
					<MatchesScreen
					// goToProfilesScreen={this.goToProfilesScreen}
					/>
				);
			default:
				return <div>Erro: página não encontrada</div>;
		}
	}

	// const goToMatchesScreen = () => {
	// 	setScreen("matches")
	// }

	// const goToProfilesScreen = () => {
	// 	setScreen("profiles")
	// }

	return (
		<div className="App">
			{chooseScreen()}
		</div>
	);
}

export default App;