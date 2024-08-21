import PropTypes from "prop-types";

const gender = (gender) => {
	if (species === "male") {
		return "Masculino";
	} else if (species === "female") {
		return "Femenino";
	} else {
		return gender;
	}
};

const species = (species) => {
	if (species === "ghost") {
		return "Fantasma";
	} else if (species === "half-giant") {
		return "Medio gigante";
	} else if (species === "human") {
		return "Humano";
	} else if (species === "werewolf") {
		return "Hombre lobo";
	} else {
		return species;
	}
};

gender.propTypes = {
	gender: PropTypes.string.isRequired,
};
species.propTypes = {
	species: PropTypes.string.isRequired,
};

const objectToExport = {
	gender: gender,
	species: species,
};

export default objectToExport;
