import React, { useState } from 'react'
import { Switch } from '../Button'
import { InputFile } from '../../Form/Inputs'
import { CropImage } from "../Modal/CropImage"

import avatarPlaceholder from "../../../assets/images/colibri-avatar.png"
import { useToggle, useUploadDataUrl } from '../../../hooks'
import { formInfo } from '../../../utils'




export function LayoutLeft(props) {

	const {
		formErrors,
		setFormData,
		language, setLanguage,
		children,
	} = props


	const [file, setFile] = useState(null)
	const [cropModal, toggleCropModal] = useToggle(false)
	const [loading, setUploadUrl] = useUploadDataUrl(setFormData, toggleCropModal)


	const resetProfile = () => {
		setFormData((prevState) => {
			return {
				...prevState,
				profile: avatarPlaceholder,
			};
		});
	}

	return (
		<div className="left">
			<Switch
				language={language}
				setLanguage={setLanguage}
			/>

			{children}



			<InputFile
				label={formInfo._PROFILE.LANGUAGE[language.index].LABEL}
				placeholder={formInfo._PROFILE.LANGUAGE[language.index].PLACEHOLDER}
				id={"upload"}
				setFile={setFile}
				toggleCropModal={toggleCropModal}
				error={formErrors.profile?.LANGUAGE[language.index].MESSAGE}
				language={language}
				onDelete={resetProfile}
			/>

			{cropModal ?
				(<CropImage
					file={file}
					toggleCropModal={toggleCropModal}
					setUploadUrl={setUploadUrl}
					loading={loading}
					language={language}
				/>)
				: null}
		</div>
	)
}
