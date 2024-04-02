export const Paginator = ({ handlePagination, page, maxPages }) => {
	return (
		<>
			<div className="w-full text-center mt-3">
				<span className="text-md font-medium text-white">Página {page}</span>
			</div>

			<div className="flex flex-col items-center">
				<div className="inline-flex mt-2 xs:mt-0">
					<button
						onClick={() => handlePagination("prev")}
						className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
							page === 1 && "hidden"
						}`}>
						<svg
							className="w-3.5 h-3.5 me-2 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 5H1m0 0 4 4M1 5l4-4"
							/>
						</svg>
						Anterior
					</button>
					<button
						onClick={() => handlePagination("next")}
						className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
							page === maxPages && "hidden"
						}`}>
						Siguiente
						<svg
							className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</button>
				</div>
			</div>
		</>
	)
}
