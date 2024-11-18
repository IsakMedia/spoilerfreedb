import { TMovieDetails, TMovieRes, TPersonDetails } from '@/types'

const apiKey = process.env.NEXT_PUBLIC_API_KEY
const apiRAT = process.env.NEXT_PUBLIC_API_RAT
const baseURL = `https://api.themoviedb.org/3/`

export const trendingMoviesFetch = async () => {
	try {
		const res = await fetch(`${baseURL}trending/movie/day?language=en-US'`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${apiRAT}`,
				accept: 'application/json',
			},
		})

		if (!res.ok) {
			throw new Error(`how is trending movies feeling? : ${res.status}`)
		}

		const jsonRes = (await res.json()) as TMovieRes

		return jsonRes
	} catch (error) {
		console.error('hey trending movies, wanna play catch? ', error)
	}
}

type TMovieParams = {
	params: {
		movieId: string
	}
}

export const movieDetailsFetch = async (movieId: string) => {
	try {
		const res = await fetch(
			`${baseURL}/movie/${movieId}?append_to_response=credits`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${apiRAT}`,
					accept: 'application/json',
				},
			},
		)

		if (!res.ok) {
			throw new Error(`couldnt get movie details : ${res.status}`)
		}

		const jsonRes = (await res.json()) as TMovieDetails
		return jsonRes
	} catch (error) {
		console.error('hey movieId, wanna play catch? ', error)
	}
}

export const personDetailsFetch = async (personId: string) => {
	try {
		const res = await fetch(
			`${baseURL}person/${personId}?&append_to_response=credits`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${apiRAT}`,
					accept: 'application/json',
				},
			},
		)

		if (!res.ok) {
			throw new Error(
				`couldnt get crew details in API-requests : ${res.status}`,
			)
		}

		const jsonRes = (await res.json()) as TPersonDetails
		return jsonRes
	} catch (error) {
		console.error('hey personId, wanna play catch? ', error)
	}
}
