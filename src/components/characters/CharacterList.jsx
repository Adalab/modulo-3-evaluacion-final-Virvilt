import CharacterItem from "../characters/CharacterItem";
import PropTypes from "prop-types";
import Filters from "../filters/Filters";
function CharacterList({ characters, updateNameFilter, updateHouseFilter }) {
	if (characters.length === 0) {
		return <p>No hay personajes para mostrar.</p>;
	}

	return (
		<>
			<Filters
				updateNameFilter={updateNameFilter}
				updateHouseFilter={updateHouseFilter}
			/>
			<section className="characters">
				<h2 className="characters__title title--medium">
					Lista de personajes
				</h2>
				<ul className="cards">
					{characters.map((character) => (
						<CharacterItem character={character} />
					))}
				</ul>
			</section>
		</>
	);
}

CharacterList.propTypes = {
	characters: PropTypes.array.isRequired,
};

export default CharacterList;
