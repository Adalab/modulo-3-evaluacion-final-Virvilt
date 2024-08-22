import { useEffect, useState } from "react";
import "../styles/App.scss";
import CharacterList from "./characters/CharacterList";
import api from "../services/api";
import FilterName from "./filters/FilterName";
import FilterHouse from "./filters/FilterHouse";

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
				<form>
					<FilterName updateNameFilter={updateNameFilter} />
					<FilterHouse updateHouseFilter={updateHouseFilter} />
				</form>
			</main>

			<section className="characters">
				<h2 className="characters__title title--medium">
					Lista de personajes
				</h2>
				<CharacterList characters={filteredCharacters} />
			</section>

			<footer>
				<small>&copy;2024 Adalabers</small>
			</footer>
		</>
	);
}

export default App;
