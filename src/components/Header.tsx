import React from 'react'

type THeaderProps = {
	greeting: string
}

export function Header({ greeting }: THeaderProps) {
	return <header>{greeting} from header</header>
}
