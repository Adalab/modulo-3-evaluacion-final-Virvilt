import PropTypes from "prop-types";
import bgGryffindor from "../images/gryffindor.jpeg";
import bgHufflepuff from "../images/hufflepuff.jpeg";
import bgRavenclow from "../images/ravenclow.jpeg";
import bgSlytherin from "../images/slytherin.jpeg";
import bgHogwarts from "../images/hogwarts.jpg";

const getBackgroundCharacter = (image, house) => {
	if (image === undefined || image === "") {
		if (house.toLowerCase() === "gryffindor") {
			return bgGryffindor;
		} else if (house.toLowerCase() === "hufflepuff") {
			return bgHufflepuff;
		} else if (house.toLowerCase() === "ravenclow") {
			return bgRavenclow;
		} else if (house.toLowerCase() === "slytherin") {
			return bgSlytherin;
		} else {
			return bgHogwarts;
		}
	}
	return image;
};

getBackgroundCharacter.propTypes = {
	image: PropTypes.string.isRequired,
	house: PropTypes.string.isRequired,
};

const objectToExport = {
	getBackgroundCharacter: getBackgroundCharacter,
};

export default objectToExport;
