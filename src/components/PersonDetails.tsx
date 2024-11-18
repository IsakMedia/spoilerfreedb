'use client'

import type { TPersonDetails } from '@/types'
import Link from 'next/link'

export const PersonDetails = ({
	biography,
	birthday,
	deathday,
	gender,
	id,
	imdb_id,
	known_for_department,
	name,
	place_of_birth,
	popularity,
	profile_path,
	credits,
}: TPersonDetails) => {
	console.log('im in person details of: ', name)

	return (
		<section className='details-page'>
			<article className='person-card flex'>
				<div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center'>
					<h2 className='text-cyan-400'>{name}</h2>
					{/* filter status, if status === "released" set border color on img tag */}
					<img
						src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
						className='object-contain'
						width={300}
					/>
				</div>
				<div className='flex space-x-10'>
					<p>Role: {known_for_department}</p>
					<p>date of birth: {birthday}</p>
					<p>gender: {gender}</p>
				</div>
			</article>

			<article className='other-works mt-3'>
				<p>Films:</p>

				<ul>
					{credits && credits.cast.length > 0 ? (
						credits.cast.map((film) => (
							<li key={film.id} className='bg-gray-800 mb-1'>
								<p>
									<Link href={`/movie/${film.id}`}>
										<span className='font-semibold'>does this work?</span>
									</Link>
								</p>
							</li>
						))
					) : (
						<p>No films available</p>
					)}
				</ul>
			</article>
		</section>
	)
}
