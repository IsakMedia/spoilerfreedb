'use client'

import type { TMovieDetails } from '@/types'
import Link from 'next/link'

export const MovieDetails = ({
	id,
	title,
	poster_path,
	runtime,
}: TMovieDetails) => {
	console.log('im in movie details', title)
	return (
		<div className='movie-card h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center'>
			<h2 className='text-green-900'>{title}</h2>
			<img
				src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
				className='object-contain'
			/>
			<p>Runtime: {runtime}min</p>
		</div>
	)
}
