import { gql } from "@apollo/client"

export const GET_CHARACTERS = gql`
	query Characters(
		$page: Int
		$name: String
		$status: String
		$species: String
		$gender: String
	) {
		characters(
			page: $page
			filter: {
				name: $name
				status: $status
				species: $species
				gender: $gender
			}
		) {
			info {
				pages
			}
			results {
				id
				name
				species
				status
				type
				gender
				origin {
					name
				}
				location {
					name
					dimension
				}
				image
			}
		}
	}
`
