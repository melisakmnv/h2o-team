import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import { hoverMessage, formErrorMessages } from "../../../utils";
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
	onDelete
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
								{hoverMessage.limiteSizeMessage.LANGUAGE[language.index].MESSAGE}
							</HoverMessage>
						}
					>
						<div
							className="btn-wrapper"
							style={{ border: error ? "1px solid red" : "none" }}
						>
							<button className="label upload-button">{placeholder}</button>

							<input
								key={inputKey}
								className="form--input"
								accept="image/*"
								type="file"
								onChange={handleFileChange}
								id={id}
							/>
						</div>
					</Tippy>

					<Delete onDelete={onDelete}/>
				</div>
			</div>
		</div>
	);
};
