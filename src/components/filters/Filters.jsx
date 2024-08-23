import PropTypes from "prop-types";
import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters({
	nameFilter,
	updateNameFilter,
	houseFilter,
	updateHouseFilter,
}) {
	const handleSubmitForm = (ev) => {
		ev.preventDefault();
	};
	return (
		<>
			<form className="form__filters" onSubmit={handleSubmitForm}>
				<FilterName
					nameFilter={nameFilter}
					updateNameFilter={updateNameFilter}
				/>
				<FilterHouse
					houseFilter={houseFilter}
					updateHouseFilter={updateHouseFilter}
				/>
			</form>
		</>
	);
}

Filters.propTypes = {
	nameFilter: PropTypes.string.isRequired,
	updateNameFilter: PropTypes.func.isRequired,
	houseFilter: PropTypes.string.isRequired,
	updateHouseFilter: PropTypes.func.isRequired,
};

export default Filters;
