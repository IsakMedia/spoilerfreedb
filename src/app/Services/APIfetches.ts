import axios from 'axios'
import type { TMovieDetails, TMovieRes, TPersonDetails } from '@/types'

const apiKey = process.env.NEXT_PUBLIC_API_KEY
const apiRAT = process.env.NEXT_PUBLIC_API_RAT

// Why did i use this?

// type TMovieParams = {
// 	params: {
// 		movieId: string
// 	}
// }

export const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	timeout: 6000,
	headers: {
		Authorization: 'Bearer ' + apiRAT,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	params: {
		// include_adult: 'false',
		// region: '',
	},
})

// decide if getData should include append to credits or straight into axios

export const getData = async <T>(
	resourceUrl: string,
	credits: object = {},
): Promise<T> => {
	const response = await instance.get<T>(resourceUrl, {
		params: {
			...credits,
		},
	})
	return response.data
}

export const trendingMoviesFetch = async () => {
	const response = await getData<TMovieRes>('trending/movie/day?language=en-US')
	return response
}

export const movieDetailsFetch = async (movieId: string) => {
	const response = await getData<TMovieDetails>(`movie/${movieId}`, {
		append_to_response: 'credits',
	})
	return response
}

export const personDetailsFetch = async (personId: string) => {
	const response = await getData<TPersonDetails>(`person/${personId}`, {
		append_to_response: 'credits',
	})
	return response
}
