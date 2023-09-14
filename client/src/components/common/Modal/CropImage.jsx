import "./CropImage.scss"
import { useRef } from 'react'
import { Cropper, CircleStencil } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import { Apply, Cancel, Close } from '../Button';
import { roundEdges, uploadingMessage } from "../../../utils";


export const CropImage = ({ file, toggleCropModal, setUploadUrl, loading, language }) => {
	const cropperRef = useRef(null)

	

	const onCrop = () => {
		const cropper = cropperRef.current

		if (cropper) {
			const canvas = cropper.getCanvas()
			setUploadUrl(roundEdges(canvas).toDataURL())
		}
	}

	return (
		<div className="crop">
			<div className="crop__cropper-wrapper">
				{!loading ? <Close toggle={toggleCropModal} /> : null}
				<div className="crop__cropper-wrapper-image">
					<Cropper
						ref={cropperRef}
						src={file}
						stencilComponent={CircleStencil}
						stencilProps={{
							grid: true
						}}
						imageClassName="crop__cropper-image"
						backgroundClassName="crop__cropper-background"
						style={{ height: 450 }}
					/>
				</div>

				<div className="crop__cropper-btn-footer">
					<span>{loading ? uploadingMessage.LANGUAGE[language.index].MESSAGE : null}</span>
					<div className="crop__cropper-btn-wrapper">
						{!loading ? <Cancel toggle={toggleCropModal} language={language} /> : null}
						<Apply apply={onCrop} loading={loading} language={language} />
					</div>
				</div>
			</div>
		</div>
	)
}
