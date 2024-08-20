import { useState } from "react";
import "../styles/App.scss";
import charactersJson from "../data/characters.json";
import translates from "../services/Translates";
import CharacterList from "./characters/CharacterList";

function App() {
	const [characters, setCharacters] = useState(charactersJson);

	return (
		<>
			<header>
				<h1>Harry Popotter</h1>
			</header>

			<main className="main">
				<form>
					<div className="form__section">
						<label>Buscar personaje</label>
						<div>
							<input type="text" />
						</div>
					</div>
					<div className="form__section">
						<label>Seleccina la casa</label>
						<div>
							<select>
								<option>Gryffindor</option>
								<option>Hufflepuff</option>
								<option>Ravenclaw</option>
								<option>Slytherin</option>
							</select>
						</div>
					</div>
				</form>
			</main>

			<section className="characters">
				<h2 className="characters__title title--medium">
					Lista de personajes
				</h2>
				<CharacterList characters={characters} />
			</section>

			<footer>
				<small>&copy;2024 Adalabers</small>
			</footer>
		</>
	);
}

export default App;
