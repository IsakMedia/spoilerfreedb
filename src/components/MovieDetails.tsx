'use client'

import type { TMovieDetails } from '@/types'
import Link from 'next/link'

export const MovieDetails = ({
	id,
	imdb_id,
	poster_path,
	runtime,
	budget,
	genres,
	origin_country,
	original_language,
	original_title,
	overview,
	popularity,
	production_companies,
	production_countries,
	release_date,
	revenue,
	spoken_languages,
	status,
	tagline,
	title,
	vote_average,
	vote_count,
	credits,
}: TMovieDetails) => {
	console.log('im in movie details', title)

	// const actorList = credits?.cast.map((actor, index) => {
	// 	return <li key={index}>{actor.name}</li>
	// })

	return (
		<section className='details-page'>
			<article className='movie-card'>
				<div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center'>
					<h2 className='text-green-900'>{title}</h2>
					{/* filter status, if status === "released" set border color on img tag */}
					<img
						src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
						className='object-contain'
					/>
					<p>Runtime: {runtime}min</p>
					<p>Status: {status}</p>
					<p>Score: {vote_average}</p>
				</div>
			</article>

			<article className='crew'>
				<p>Director:</p>
				<p>Producer:</p>
			</article>

			<article className='actors bg-gray-700'>
				<p className='text-slate-300'>Actors:</p>
				<ul className='p-0 m-0'>
					{credits && credits.cast.length > 0 ? (
						credits.cast.map((actor, index) => (
							<li key={index} className='bg-gray-800 mb-1'>
								<p>
									<Link href={`/crew/${actor.id}`}>
										<span className='font-semibold'>{actor.name}</span>
									</Link>
									as {''}
									<span className='text-red-300'>{actor.character}</span>
								</p>
							</li>
						))
					) : (
						<p>No cast available</p>
					)}
				</ul>
			</article>
		</section>
	)
}
