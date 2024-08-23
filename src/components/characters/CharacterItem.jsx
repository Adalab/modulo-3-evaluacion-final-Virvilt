import translates from "../../utils/translates";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import characterUtils from "../../utils/characterUtils";

function CharacterItem({ character }) {
	return (
		<li className="character_item">
			<Link to={`/character/${character.id}`}>
				<div className="details">
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
					<div className="info">
						<h2 className="title">{character.name}</h2>
						<p className="species">
							{translates.species(character.species)}
						</p>
					</div>
				</div>
			</Link>
		</li>
	);
}

CharacterItem.propTypes = {
	character: PropTypes.object.isRequired,
};

export default CharacterItem;
