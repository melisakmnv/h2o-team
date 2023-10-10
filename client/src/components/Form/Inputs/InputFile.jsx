import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import { hoverMessage, formErrorMessages, signatureInfo } from "../../../utils";
import { maxImageWeight, maxImageWeightInMB } from "../../../constants/uploadConfig.js";
import { Delete } from "../../common/Button";
import { HoverMessage } from "../../common/Hover/Hover";

export const InputFile = ({
	label,
	placeholder,
	id,
	setFile,
	toggleCropModal,
	error,
	language,
	onDelete,
	formData = { formData }
}) => {
	const [inputKey, setInputKey] = useState(0);



	const handleFileChange = (event) => {
		if (event.target.files[0].size > maxImageWeight) {
			alert(
				formErrorMessages.MAX_SIZE.LANGUAGE[language.index].MESSAGE
			)
			setInputKey((prevKey) => prevKey + 1);
			return;
		}


		const file = event.target.files && event.target.files[0];
		if (file) {
			setFile(URL.createObjectURL(file));
			toggleCropModal(true);
		}
		event.target.value = "";
	};

	return (

		<div className="form col">
			<div className="info col">
				<div style={{ justifyContent: "space-between" }} className="row gap05">
					<label>{label}</label>
					{error ? (
						<span style={{ fontSize: "8px", color: "red" }}>{error}</span>
					) : null}
				</div>

				<div className="content-wrapper row gap05">
					<Tippy
						placement="bottom"
						theme="dark"
						content={
							<HoverMessage>
								{
									formData.profile === signatureInfo.illustrations.avatar.src ?
										hoverMessage.limiteSizeMessage.LANGUAGE[language.index].MESSAGE
										: <span>
											Il faut supprimer l'ancienne photo d'abord
										</span>

								}
							</HoverMessage>
						}
					>
						<div
							className="btn-wrapper"
							style={{ border: error ? "1px solid red" : "none" }}>
							<button
								disabled={formData.profile !== signatureInfo.illustrations.avatar.src ? true : false}
								className="label upload-button"
								style={{
									cursor: formData.profile !== signatureInfo.illustrations.avatar.src ? "not-allowed" : "pointer",
									border: formData.profile !== signatureInfo.illustrations.avatar.src ? "1px solid #cccccc" : "1px solid black"
								}}
							>{
									placeholder}</button>

							{
								formData.profile === signatureInfo.illustrations.avatar.src &&
								(<input

									key={inputKey}
									className="form--input"
									accept="image/*"
									type="file"
									onChange={handleFileChange}
									id={id}
								/>)
							}
						</div>
					</Tippy>
					{/* <Delete onDelete={onDelete} profileUrl={profileUrl} formData={formData} /> */}
					{formData.profile !== signatureInfo.illustrations.avatar.src && <Delete onDelete={onDelete} formData={formData} />}
				</div>
			</div>
		</div>
	);
};
