'use client'
import { PersonDetails } from '@/components/PersonDetails'
import type { TPersonDetails } from '@/types'
import { useEffect, useState } from 'react'
import { personDetailsFetch } from '@/components/dataFetch'

type TPersonParams = {
	params: {
		crewId: string
	}
}

const PersonPage = ({ params }: TPersonParams) => {
	console.log('hello from person page')
	const [data, setData] = useState<TPersonDetails | null>(null)

	const fetchData = async () => {
		try {
			const personData = await personDetailsFetch(params.crewId)

			if (personData) {
				setData(personData)
			}
		} catch (error) {
			console.error(error)
		}
	}

	console.log('gimme the actor detail data', data)

	useEffect(() => {
		fetchData()
	}, [params.crewId])

	return (
		<div>
			{data ? (
				<PersonDetails
					biography={data.biography}
					birthday={data.birthday}
					deathday={data.deathday}
					gender={data.gender}
					id={data.id}
					imdb_id={data.imdb_id}
					known_for_department={data.known_for_department}
					name={data.name}
					place_of_birth={data.place_of_birth}
					popularity={data.popularity}
					profile_path={data.profile_path}
					credits={data.credits}
				/>
			) : (
				<p>Loading...</p>
			)}
		</div>
	)
}

export default PersonPage
