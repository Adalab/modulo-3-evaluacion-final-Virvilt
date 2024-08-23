function FilterName({ nameFilter, updateNameFilter }) {
	const handleChangeFilterName = (ev) => {
		ev.preventDefault();
		const value = ev.currentTarget.value.toLowerCase();
		updateNameFilter(value);
	};

	return (
		<div className="form__section">
			<label>Buscar personaje</label>
			<div>
				<input
					type="text"
					onChange={handleChangeFilterName}
					value={nameFilter}
				/>
			</div>
		</div>
	);
}

export default FilterName;
