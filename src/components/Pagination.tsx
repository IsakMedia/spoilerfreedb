import React from 'react'

type Props = {}

export const Pagination = (props: Props) => {
	return (
		<>
			<section className='join'>
				<button className='join-item btn'>«</button>
				<button className='join-item btn'>1</button>
				<button className='join-item btn btn-active'>2</button>
				<button className='join-item btn'>3</button>
				<button className='join-item btn'>4</button>
				<button className='join-item btn'>»</button>
			</section>
		</>
	)
}
