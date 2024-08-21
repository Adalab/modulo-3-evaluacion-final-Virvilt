import translates from "../../services/translates";
import PropTypes from "prop-types";

function CharacterItem({ character }) {
	return (
		<li className="card">
			<div className="details">
				<img
					src={character.image}
					alt={`Foto de ${character.name}`}
					title={`Foto de ${character.name}`}
					className="card__img"
				/>
				<div>
					<h2 className="card__title">{character.name}</h2>
					<p className="card__species">
						{translates.species(character.species)}
					</p>
				</div>
			</div>
		</li>
	);
}

CharacterItem.propTypes = {
	character: PropTypes.array.isRequired,
};

export default CharacterItem;
