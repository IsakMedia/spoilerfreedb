'use client'
import { MovieDetails } from '@/components/MovieDetails'
import type { TMovieDetails } from '@/types'
import { useEffect, useState } from 'react'
import { movieDetailsFetch } from '@/components/dataFetch'

type TMovieParams = {
	params: {
		movieId: string
	}
}

const page = ({ params }: TMovieParams) => {
	const [data, setData] = useState<TMovieDetails | null>(null)

	const fetchData = async () => {
		try {
			const movieData = await movieDetailsFetch(params.movieId)
			console.log('MOVIE DATA on try', data)

			if (movieData) {
				setData(movieData)
			}
		} catch (error) {
			console.log(error)
		}
	}

	console.log('here is set data: ', data)

	useEffect(() => {
		fetchData()
	}, [params.movieId])

	return (
		<div>
			{data ? (
				<MovieDetails
					title={data.title}
					id={data.id}
					poster_path={data.poster_path}
					runtime={data.runtime}
					credits={data.credits}
					status={data.status}
					vote_average={data.vote_average}
				/>
			) : (
				<p>Loading...</p>
			)}
		</div>
	)
}

export default page
