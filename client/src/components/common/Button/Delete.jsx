import React, { useRef } from 'react'
import Trash from '../../../assets/lotties/trash.json'
import Lottie, { useLottie } from 'lottie-react';
import { signatureInfo } from '../../../utils';

import './Button.scss'
import Tippy from '@tippyjs/react';
import { HoverMessage } from '../Hover/Hover';


export const Delete = ({ onDelete, formData }) => {

	const lottieRef = useRef();

	const handleDelete = () => {
		console.log("clicked")
		onDelete()
		lottieRef.current.play()
	}


	return (
		<div>
			<Tippy
				placement="bottom"
				theme="dark"
				content={
					<HoverMessage>
						<span>Supprimer photo</span>
					</HoverMessage>
				}
			>

				<button
					disabled={formData.profile === signatureInfo.illustrations.avatar.src}
					onClick={handleDelete}
					className='delete-button'
					type="button"
					style={{ cursor: formData.profile === signatureInfo.illustrations.avatar.src ? "not-allowed" : "pointer" }}
				>
					<Lottie lottieRef={lottieRef} autoPlay={true} loop={false} animationData={Trash} style={trashStyle} width="100" height='100' />
				</button>
			</Tippy>
		</div>
	)
}

const trashStyle = {
	height: "70%",
};