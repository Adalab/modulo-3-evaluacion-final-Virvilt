import { useState } from "react";
import translates from "../../utils/translates";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation, matchPath } from "react-router";
import characterUtils from "../../utils/characterUtils";

function CharacterDetail({ characters }) {
	const { pathname } = useLocation();
	const routeData = matchPath("character/:characterId", pathname);
	const characterId = routeData !== null ? routeData.params.characterId : "";
	let character = characters.find(
		(character) => character.id === characterId
	);

	if (character.alive !== undefined && character.alive) {
		character.status = "Vivo";
	} else {
		character.status = "Muerto";
	}

	return (
		<section className="character_detail">
			<Link to={`/`} className="back-link">
				<i class="fa-sharp fa-solid fa-arrow-left"></i> volver
			</Link>
			<div className="card_perfile">
				<div className="picture">
					<img
						src={characterUtils.getBackgroundCharacter(
							character.image,
							character.house
						)}
						alt={`Foto de ${character.name}`}
						title={`Foto de ${character.name}`}
					/>
				</div>
				<div class="info">
					<h2>{character.name}</h2>
					<p>
						<strong>Estatus:</strong> {character.status}{" "}
						<span class="heart">💖</span>
					</p>
					<p>
						<strong>Especie:</strong>{" "}
						{translates.species(character.species)}{" "}
						<span class="icon">👤</span>
					</p>
					<p>
						<strong>Genero:</strong>{" "}
						{translates.gender(character.gender)}
					</p>
					<p>
						<strong>Casa:</strong> {character.house}
					</p>
				</div>
			</div>
		</section>
	);
}

CharacterDetail.propTypes = {
	characters: PropTypes.array.isRequired,
};

export default CharacterDetail;
