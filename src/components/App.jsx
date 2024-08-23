import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./characters/CharacterList";
import api from "../services/api";
import "../styles/App.scss";
import CharacterDetail from "./characters/CharacterDetail";
import ls from "../services/localStorage";
import logo from "../images/harry-potter-logo.png";

function App() {
	const [characters, setCharacters] = useState([]);
	const localStorageNameFilter = ls.get("nameFilter", "");
	const localStorageHouseFilter = ls.get("houseFilter", "gryffindor");
	const [nameFilter, setNameFilter] = useState(localStorageNameFilter);
	const [houseFilter, setHouseFilter] = useState(localStorageHouseFilter);

	useEffect(() => {
		api.getAllCharacters().then((response) => {
			setCharacters(response);
		});
	}, []);

	const filteredCharacters = characters.filter((character) => {
		if (
			character.name.toLowerCase().includes(nameFilter) &&
			(houseFilter === "all" ||
				character.house.toLowerCase() === houseFilter)
		) {
			return true;
		}
		return false;
	});

	// lifting
	const updateNameFilter = (value) => {
		ls.set("nameFilter", value);
		setNameFilter(value);
	};

	// lifting
	const updateHouseFilter = (value) => {
		ls.set("houseFilter", value);
		setHouseFilter(value);
	};

	return (
		<>
			<header>
				<h1>
					<img
						src={logo}
						className="logo"
						alt="Harry Potter"
						title="Harry Potter"
					/>
				</h1>
			</header>

			<main className="main">
				<Routes>
					{/* Ruta estatica (character list)*/}
					<Route
						path="/"
						element={
							<CharacterList
								characters={filteredCharacters}
								nameFilter={nameFilter}
								updateNameFilter={updateNameFilter}
								houseFilter={houseFilter}
								updateHouseFilter={updateHouseFilter}
							/>
						}
					/>

					{/* Ruta dinamica (character detail)*/}
					<Route
						path="/character/:characterId"
						element={<CharacterDetail characters={characters} />}
					/>
				</Routes>
			</main>

			<footer>
				<small>&copy;2024 Adalabers</small>
			</footer>
		</>
	);
}

export default App;
