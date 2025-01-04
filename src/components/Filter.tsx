'use client'

import React from 'react'
import { useState } from 'react'

// should let slider set number_of_votes in whole 1000 numbers 0 - 100 0000
// set a state for updated input. math round to whole 1000, set a rule for <= setNumber
// create a function that sets number of votes and filter out movies based on number of votes before initial
// fetch is done.... or filter out displayed movies after initial fetch.

type TfilterProps = {
	id: string
	maxValue: number
	onChange: (value: number) => void
}

export const Filter = ({ maxValue: maxValue, id, onChange }: TfilterProps) => {
	const [number, setNumber] = useState(0)

	const handleChange = (e: any) => {
		const value = Number(e.target.value)
		setNumber(value)
		onChange(value)
	}

	return (
		<>
			<h3>Filter</h3>
			<div className='flex-col items-center gap-2'>
				<div className='border-2 border-black max-w-max'>
					<span>0</span>
					<input
						className='flex-shrink-1'
						type='range'
						id={id}
						name={id}
						min='0'
						max={maxValue}
						value={number}
						onChange={handleChange}
					/>
					<span>{maxValue}:votes</span>
				</div>
				<div className='content-center border-2 border-white max-w-max'>
					<output id='value' className=''>
						{number}
					</output>
				</div>
			</div>
		</>
	)
}
