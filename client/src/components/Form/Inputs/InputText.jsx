import React, { useState } from 'react'
import "../Form.scss"
import { formatFrenchNumber, } from '../../../utils/contents/formatPhoneNumber'

export const InputText = (props) => {

  const { label, placeholder, name, value, onChange, onKeyDown, maxLength, error, id, phone, children } = props
  const [phoneCode, setPhoneCode] = useState("+33")

  const handleKeyDown = (event) => {
    if (isNaN(event.key) && event.key !== "Backspace" && event.key !== "Tab") {
      event.preventDefault();
    }
  }

  const setPhoneNumber = (number) => {
    if (phoneCode === "+33") {
      return formatFrenchNumber(number)
    } if (phoneCode === "+32") {
      return formatBelgianPhoneNumber(number)
    }
  }

  return (
    <div className="info col">
      <div style={{ justifyContent: "space-between" }} className="row gap05">
        <label>{label}</label>
        {error ? <span style={{ fontSize: "8px", color: "red" }}>{error}</span> : null}
      </div>
      <div className='input-wrapper'>
        <div className='flex gap05'>
          {children}
          <input
            className='form-input'
            style={{ border: error ? "1px solid red" : "1px solid #CCCCCC" }}
            maxLength={maxLength}
            type={phone ? "tel" : "text"}
            placeholder={placeholder}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown && handleKeyDown}
          />
        </div>
      </div>

    </div>
  )
}
