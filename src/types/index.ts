// MOVIES

export type TMovieRes = {
	page: number
	results: TMovieDetails[]
	total_pages: number
	total_results: number
}

export type TMovieDetails = {
	adult?: boolean
	backdrop_path?: string
	budget?: number
	genres?: TGenres[]
	id?: number
	imdb_id?: string
	origin_country?: string[]
	original_language?: string
	original_title?: string
	overview?: string
	popularity?: number
	poster_path?: string
	production_companies?: TproductionCompany[]
	production_countries?: TproductionCountries[]
	release_date?: string
	revenue?: number
	runtime?: number
	spoken_languages?: TLanguage[]
	status?: string
	tagline?: string
	title?: string
	vote_average?: number
	vote_count?: number
	credits?: {
		cast: TCast[]
		crew: TCrew[]
	}
}

type TGenres = {
	id: number
	name: string
}

type TproductionCompany = {
	id: number
	logo_path: string
	name: string
	origin_country: string
}

type TproductionCountries = {
	iso_3166_1: string
	name: string
}

type TLanguage = {
	english_name: string
	iso_639_1: string
	name: string
}

// PRODUCTION

type TCast = {
	adult: boolean
	cast_id: number
	character: string
	credit_id: string
	gender: number
	id: number
	known_for_department: string
	name: string
	order: number
	original_name: string
	popularity: number
	profile_path: string
}

type TCrew = {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path: string
	credit_id: string
	department: string
	job: string
}

// extended info about Production member
type TpersonDetails = {
	adult: false
	also_known_as: string[]
	biography: string
	birthday: string
	deathday: null | string
	gender: number
	homepage: null | string
	id: number
	imdb_id: string
	known_for_department: string
	name: string
	place_of_birth: string
	popularity: number
	profile_path: string
}
