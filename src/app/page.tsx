'use client'
import { useState } from 'react'
import { trendingMoviesFetch } from './Services/APIfetches'
import type { TMovieRes } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Filter } from '@/components/Filter'

export default function Home() {
	const [data, setData] = useState<TMovieRes | null>(null)

	const fetchData = async () => {
		try {
			const movieData = await trendingMoviesFetch()
			console.log('MOVIE DATA on try', movieData)

			if (movieData) setData(movieData)
		} catch (error) {
			console.log(error)
		}
	}

	const [votesFilter, setVotesFilter] = useState(0)
	console.log('votesFilter value: ', votesFilter)

	return (
		<>
			<main>
				<h1>SpoilerFreeDB</h1>
				<button onClick={() => fetchData()}>click</button>
				<Filter
					id={'votes'}
					maxVote={10000}
					onChange={(value: number) => setVotesFilter(value)}
				/>

				{data?.results.map(
					({ id, title, poster_path, vote_average, vote_count }) =>
						vote_count! <= votesFilter ? (
							<div
								key={id}
								className='movie-card h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center p-2 '
							>
								<Link href={`/movies/${id}`}>
									<h2>{title}</h2>
									<Image
										src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
										width={500}
										height={500}
										alt={`Movie Poster for the movie: ${title}`}
									/>
									<p>{vote_average}</p>
								</Link>
							</div>
						) : null, // Return null if the condition is false
				)}
			</main>
		</>
	)
}
