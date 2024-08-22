import translates from "../../services/translates";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterItem({ character }) {
	return (
		<li className="card">
			<Link to={`/character/${character.id}`}>
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
			</Link>
		</li>
	);
}

CharacterItem.propTypes = {
	character: PropTypes.array.isRequired,
};

export default CharacterItem;
