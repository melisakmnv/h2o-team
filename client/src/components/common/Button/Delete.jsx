import React, { useRef } from 'react'
import Trash from '../../../assets/lotties/trash.json'
import Lottie, { useLottie } from 'lottie-react';

export const Delete = (props) => {

  const lottieRef = useRef();

  const handleDelete = () => {
    props.onDelete()

    lottieRef.current.play()
  }


  return (
    <div>
      <button onClick={handleDelete} className='delete-button'>
        <Lottie lottieRef={lottieRef} autoPlay={true} loop={false} animationData={Trash} style={trashStyle} width="100" height='100'/>
      </button>
    </div>
  )
}

const trashStyle = {
  position: 'absolute',
  height: "200px",
  with: "200px",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(1.5)',
};