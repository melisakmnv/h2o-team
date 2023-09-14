import React from 'react'

export const Cell = (props) => {

	const { children, h, w, borderLeft, position, bg } = props

	// All cells should have padding 0.1px
	return (
		<td
			valign={position}
			width={w}
			height={h}
			style={{
				padding: "0.1px",
				border: "none",
				textDecoration: "none",
				borderLeft: borderLeft,
				background: bg,
				verticalAlign: position,
				boxSizing: "border-box"
			}}
		>
			{children}
		</td>
	)
}
