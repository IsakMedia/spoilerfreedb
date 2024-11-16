'use client'
import { useEffect, useState } from 'react'
import { trendingMoviesFetch } from '../components/dataFetch'
import type { TMovieRes } from '@/types'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'

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

	return (
		<>
			<main>
				<h1>SpoilerFreeDB</h1>
				<button onClick={() => fetchData()}>click</button>

				{data && data.results.length && (
					<div className='movie-grid max-w-sm w-full lg:max-w-full lg:flex'>
						{data?.results.map(({ id, title, poster_path, vote_average }) => (
							<div
								key={id}
								className='movie-card h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center'
							>
								<Link href={`/movies/${id}`}>
									<h2>{title}</h2>
									<img
										src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
										className='object-contain'
									/>
									<p>{vote_average}</p>
								</Link>
							</div>
						))}
					</div>
				)}
			</main>
		</>
	)
}
