import PropTypes from "prop-types";
import bgGryffindor from "../images/gryffindor.jpeg";
import bgHufflepuff from "../images/hufflepuff.jpeg";
import bgRavenclow from "../images/ravenclow.jpeg";
import bgSlytherin from "../images/slytherin.jpeg";
import bgHogwarts from "../images/hogwarts.jpg";
import logo_gryffindor from "../images/logo_gryffindor.png";
import logo_hufflepuff from "../images/logo_hufflepuff.png";
import logo_ravenclaw from "../images/logo_ravenclaw.png";
import logo_slytherin from "../images/logo_slytherin.png";
import logo_hogwarts from "../images/logo_hogwarts.png";

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

const getHouseLogo = (house) => {
	if (house.toLowerCase() === "gryffindor") {
		return logo_gryffindor;
	} else if (house.toLowerCase() === "hufflepuff") {
		return logo_hufflepuff;
	} else if (house.toLowerCase() === "ravenclow") {
		return logo_ravenclaw;
	} else if (house.toLowerCase() === "slytherin") {
		return logo_slytherin;
	} else {
		return logo_hogwarts;
	}
};

getBackgroundCharacter.propTypes = {
	image: PropTypes.string.isRequired,
	house: PropTypes.string.isRequired,
};
getHouseLogo.propTypes = {
	house: PropTypes.string.isRequired,
};

const objectToExport = {
	getBackgroundCharacter: getBackgroundCharacter,
	getHouseLogo: getHouseLogo,
};

export default objectToExport;
