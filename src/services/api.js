const getAllCharacters = () => {
	// Llamamos a la API
	return fetch("https://hp-api.onrender.com/api/characters")
		.then((response) => response.json())
		.then((response) => {
			return response;
		});
};

const getCharacter = () => {
	// Llamamos a la API
	return fetch("https://hp-api.onrender.com/api/characters")
		.then((response) => response.json())
		.then((response) => {
			return response;
		});
};

const objectToExport = {
	getAllCharacters: getAllCharacters,
	getCharacter: getCharacter,
};

export default objectToExport;
