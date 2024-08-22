import { useState } from "react";
import translates from "../../services/translates";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation, matchPath } from "react-router";

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
			<div className="card">
				<img
					src={character.image}
					alt={`Foto de ${character.name}`}
					title={`Foto de ${character.name}`}
					className="character-image"
				/>
				<div class="character-info">
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
				<Link to={`/`} className="back-link">
					volver
				</Link>
			</div>
		</section>
	);
}

CharacterDetail.propTypes = {
	characters: PropTypes.array.isRequired,
};

export default CharacterDetail;
