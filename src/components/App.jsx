import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./characters/CharacterList";
import api from "../services/api";
import "../styles/App.scss";
import CharacterDetail from "./characters/CharacterDetail";

function App() {
	const [characters, setCharacters] = useState([]);
	const [nameFilter, setNameFilter] = useState("");
	const [houseFilter, setHouseFilter] = useState("gryffindor");

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
		setNameFilter(value);
	};

	// lifting
	const updateHouseFilter = (value) => {
		setHouseFilter(value);
	};

	return (
		<>
			<header>
				<h1>Harry Popotter</h1>
			</header>

			<main className="main">
				<Routes>
					{/* Ruta estatica (character list)*/}
					<Route
						path="/"
						element={
							<CharacterList
								characters={filteredCharacters}
								updateNameFilter={updateNameFilter}
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
