'use client'

import React from 'react'
import { useState } from 'react'

// should let slider set number_of_votes in whole 1000 numbers 0 - 100 0000
// set a state for updated input. math round to whole 1000, set a rule for <= setNumber
// create a function that sets number of votes and filter out movies based on number of votes before initial
// fetch is done.... or filter out displayed movies after initial fetch.

const maxVote = 10000

export const Filter = () => {
	const [number, setNumber] = useState(0)
	return (
		<>
			<div>filter</div>
			<span>0 </span>
			<input
				type='range'
				id='popularity'
				name='popularity'
				min='0'
				max={maxVote}
				step={1000}
			></input>
			<span> {maxVote}</span>
			<output id='value'>{number}</output>
		</>
	)
}
