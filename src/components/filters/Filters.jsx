import PropTypes from "prop-types";
import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters({ updateNameFilter, updateHouseFilter }) {
	return (
		<>
			<form>
				<FilterName updateNameFilter={updateNameFilter} />
				<FilterHouse updateHouseFilter={updateHouseFilter} />
			</form>
		</>
	);
}

Filters.propTypes = {
	updateNameFilter: PropTypes.string.isRequired,
	updateHouseFilter: PropTypes.string.isRequired,
};

export default Filters;
