import PropTypes from "prop-types";

const getAllCharacters = () => {
	// Llamamos a la API
	return fetch("https://hp-api.onrender.com/api/characters")
		.then((response) => response.json())
		.then((response) => {
			return response;
		});
};

const getCharacter = (characterId) => {
	// Llamamos a la API
	return fetch(`https://hp-api.onrender.com/api/character/${characterId}`)
		.then((response) => response.json())
		.then((response) => {
			return response;
		});
};

getCharacter.propTypes = {
	characterId: PropTypes.number.isRequired,
};

const objectToExport = {
	getAllCharacters: getAllCharacters,
	getCharacter: getCharacter,
};

export default objectToExport;
