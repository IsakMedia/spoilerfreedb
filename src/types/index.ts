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
		cast: TMovieCast[]
		crew: TMovieCrew[]
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

type TMovieCast = {
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

type TMovieCrew = {
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
export type TPersonDetails = {
	adult?: false
	also_known_as?: string[]
	biography?: string
	birthday?: string
	deathday?: null | string
	gender?: number
	homepage?: null | string
	id?: number
	imdb_id?: string
	known_for_department?: string
	name?: string
	place_of_birth?: string
	popularity?: number
	profile_path?: string
	credits?: {
		cast: TPersonCast[]
		crew: TPersonCrew[]
	}
}

export type TPersonCast = {
	adult: boolean
	backdrop_path: string | null
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | null
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	credit_id: string
	department: string
	job: string
}

export type TPersonCrew = {
	adult: boolean
	backdrop_path: string | null
	character: string
	credit_id: string
	genre_ids: number[]
	id: number
	order: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | null
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}
