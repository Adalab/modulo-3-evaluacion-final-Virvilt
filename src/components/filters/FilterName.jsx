function FilterName(props) {
	const handleChangeFilterName = (ev) => {
		const value = ev.currentTarget.value.toLowerCase();
		props.updateNameFilter(value);
	};

	return (
		<div className="form__section">
			<label>Buscar personaje</label>
			<div>
				<input type="text" onChange={handleChangeFilterName} />
			</div>
		</div>
	);
}

export default FilterName;
