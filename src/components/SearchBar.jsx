export const SearchBar = ({ value, onChange, onFilter, deleteFilters }) => {
	const handleDeleteFilters = () => {
		document.getElementById("filters").reset()
		deleteFilters()
	}

	return (
		<article className="my-8 flex flex-col gap-4">
			<input
				type="text"
				name="search"
				value={value}
				onChange={onChange}
				className="w-full bg-[#272d36] flex  py-3 px-5 rounded-xl text-[#cccccc] outline-0"
				placeholder="Buscar personaje..."
			/>

			<form className="flex gap-4 items-center justify-around" id="filters">
				<select
					className="w-full px-2 py-2 rounded-lg bg-[#272d36] text-white outline-0"
					onChange={onFilter}
					name="gender">
					<option value="">Gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="unknown">Unknown</option>
				</select>

				<select
					className="w-full px-2 py-2 rounded-lg bg-[#272d36] text-white outline-0"
					onChange={onFilter}
					name="status">
					<option value="">Status</option>
					<option value="alive">Alive</option>
					<option value="dead">Dead</option>
					<option value="unknown">Unknown</option>
				</select>

				<select
					className="w-full px-2 py-2 rounded-lg bg-[#272d36] text-white outline-0"
					onChange={onFilter}
					name="species">
					<option value="">Species</option>
					<option value="human">Human</option>
					<option value="alien">Alien</option>
				</select>
			</form>
			<button
				onClick={handleDeleteFilters}
				className="w-full px-2 py-2 rounded-lg bg-[#272d36] text-white outline-0">
				Borrar filtros
			</button>
		</article>
	)
}
