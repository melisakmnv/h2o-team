import React from 'react'
import { Copy } from '../Button'
import { Baroque, Logo, Title } from '../icons'
import { useCopyClipboard } from '../../../hooks'

export function LayoutRight({  verifyInputErrors, formErrors, language, children }) {
	
	const SIGNATURE_COPY = ".signature"
	const copyTime = 2800
	const [isCopied, copyToClipboard] = useCopyClipboard(SIGNATURE_COPY, copyTime)
	
	return (

		<div className="right">
			<div className="top" >
				<span>{""}</span>
				<Title language={language} />
				<Logo />
			</div>
			<div className="signature-preview-wrapper">
					{children}
				<Copy
					onCopy={copyToClipboard}
					isCopied={isCopied}
					verifyInputErrors={verifyInputErrors}
					formErrors={formErrors}
					language={language}
				/>
			</div>
			<div>
				<Baroque />
			</div>
		</div >
	)
}
