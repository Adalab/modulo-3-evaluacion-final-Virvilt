function FilterHouse(props) {
	const handleChangeFilterHouse = (ev) => {
		const value = ev.currentTarget.value.toLowerCase();
		props.updateHouseFilter(value);
	};

	return (
		<div className="form__section">
			<label>Seleccina la casa</label>
			<div>
				<select onChange={handleChangeFilterHouse}>
					<option value="gryffindor" selected>
						Gryffindor
					</option>
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
