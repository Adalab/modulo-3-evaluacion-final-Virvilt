import CharacterItem from "./CharacterItem";
import PropTypes from "prop-types";

function CharacterList({ characters }) {
	if (characters.length === 0) {
		return <p>No hay personajes para mostrar.</p>;
	}

	return (
		<ul className="cards">
			{characters.map((character) => (
				<CharacterItem character={character} />
			))}
		</ul>
	);
}

CharacterList.propTypes = {
	characters: PropTypes.array.isRequired,
};

export default CharacterList;
