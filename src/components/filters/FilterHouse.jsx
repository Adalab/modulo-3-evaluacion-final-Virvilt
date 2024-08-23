function FilterHouse({ houseFilter, updateHouseFilter }) {
	const handleChangeFilterHouse = (ev) => {
		ev.preventDefault();
		const value = ev.currentTarget.value.toLowerCase();
		updateHouseFilter(value);
	};

	return (
		<div className="form__section">
			<label>Seleccina la casa</label>
			<div>
				<select
					onChange={handleChangeFilterHouse}
					className="house_select"
					value={houseFilter}
				>
					<option value="gryffindor">Gryffindor</option>
					<option value="hufflepuff">Hufflepuff</option>
					<option value="ravenclaw">Ravenclaw</option>
					<option value="slytherin">Slytherin</option>
					<option value="all">Todos</option>
				</select>
			</div>
		</div>
	);
}

export default FilterHouse;
