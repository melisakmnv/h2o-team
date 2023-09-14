import React from 'react'

export const Info = (props) => {

	const { children, fontFamily, fw, fontSize, lsp, lineHeight, width, bg, alignText, transformText, colorText } = props

	return (
		<p style={{ lineHeight: `${lineHeight}px`, background: bg, margin: 0 }}>
			<span
				style={{
					display: "block",
					width: width,
					background: bg,
					fontFamily: fontFamily,
					fontSize: `${fontSize}px`,
					letterSpacing: `${lsp}px`,
					lineHeight: `${lineHeight}px`,
					fontWeight: fw,
					textAlign: alignText,
					textTransform: transformText,
					color: colorText ? colorText : "#201747",
				}}
			>
				{children}
			</span>
		</p>
	)
}
