import CharacterItem from "../characters/CharacterItem";
import PropTypes from "prop-types";
import Filters from "../filters/Filters";
function CharacterList({
	characters,
	nameFilter,
	updateNameFilter,
	houseFilter,
	updateHouseFilter,
}) {
	if (characters.length === 0) {
		return (
			<>
				<Filters
					nameFilter={nameFilter}
					updateNameFilter={updateNameFilter}
					houseFilter={houseFilter}
					updateHouseFilter={updateHouseFilter}
				/>
				<p>No hay personajes para mostrar.</p>
			</>
		);
	}

	return (
		<>
			<Filters
				nameFilter={nameFilter}
				updateNameFilter={updateNameFilter}
				houseFilter={houseFilter}
				updateHouseFilter={updateHouseFilter}
			/>
			<section className="charactersList">
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
