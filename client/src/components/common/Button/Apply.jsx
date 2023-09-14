import React from 'react'
import { buttonMessage } from '../../../utils'

export const Apply = ({ apply, loading, language }) => {
  return (
    <>
      <button onClick={apply} className="apply-btn">
        {loading ? <span className="loader"></span> : <span>{buttonMessage.APPLIQUER.LANGUAGE[language.index].MESSAGE}</span>}
      </button>
    </>
  )
}
