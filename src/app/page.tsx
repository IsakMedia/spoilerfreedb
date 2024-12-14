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
	const [avScore, setAvScore] = useState(0)
	console.log('votesFilter value: ', votesFilter)
	console.log('voteav:', avScore)

	return (
		<>
			<main>
				<h1>SpoilerFreeDB</h1>
				<button onClick={() => fetchData()}>click</button>
				<Filter
					id={'votes'}
					maxValue={10000}
					onChange={(value: number) => setVotesFilter(value)}
				/>

				<Filter
					id={'score'}
					maxValue={10}
					onChange={(value: number) => setAvScore(value)}
				/>

				<div className='flex  border-blue-400'>
					{data?.results.map(
						({ id, title, poster_path, vote_average, vote_count }) =>
							vote_count! <= votesFilter &&
							Math.round(vote_average!) >= avScore ? (
								<div
									key={id}
									className='card lg:card-side bg-base-100 shadow-xl p-3 border-blue-800'
								>
									<figure>
										<Image
											src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
											width={500}
											height={500}
											alt={`Movie Poster for the movie: ${title}`}
										/>
									</figure>
									<div className='card-body border-blue-600'>
										<h2 className='card-title'>
											Title: <b>{title}</b>
										</h2>

										<div className='card-actions justify-end'>
											<p>Average score: {vote_average}</p>
											<Link href={`/movies/${id}`}>
												<button
													className='"rounded-md bg-gradient-to-tr from-emerald-700 to-cyan-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"'
													type='button'
												>
													View Details
												</button>
											</Link>
										</div>
									</div>
								</div>
							) : null,
					)}
				</div>
			</main>
		</>
	)
}
