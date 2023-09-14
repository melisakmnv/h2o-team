import React from 'react'

export const Row = (props) => {

	const { children, h } = props
	
	return (
		<tr height={h}>
			{children}
		</tr>
	)
}
