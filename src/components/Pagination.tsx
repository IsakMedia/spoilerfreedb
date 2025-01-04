'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

type TPaginationProps = {
	pageNumber: number
	setPage: (page: number) => void
}

export const Pagination = ({ pageNumber, setPage }: TPaginationProps) => {
	const handlePageChange = (newPage: number) => {
		if (newPage >= 500) {
			setPage(500)
		} else if (newPage < 1) {
			setPage(1)
		} else {
			setPage(newPage)
		}
	}

	return (
		<>
			<section className='join'>
				<button
					className='join-item btn'
					onClick={() => handlePageChange(pageNumber - 1)}
				>
					«
				</button>
				<button className='join-item btn btn-active'>{`${pageNumber}`}</button>
				<button
					className='join-item btn'
					onClick={() => handlePageChange(pageNumber + 1)}
				>
					»
				</button>
			</section>
		</>
	)
}
