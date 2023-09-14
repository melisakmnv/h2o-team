import React from 'react'
import { buttonMessage } from '../../../utils'

export const Cancel = ({ toggle, language }) => {


  return (
    <>
      <button  className="cancel-btn" onClick={() => toggle(false)}>{buttonMessage.ANNULER.LANGUAGE[language.index].MESSAGE}</button>
    </>
  )
}
