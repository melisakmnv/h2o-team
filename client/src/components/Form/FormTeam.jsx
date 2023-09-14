import React from 'react'
import { formInfo, formKeys, generateFormInfo } from '../../utils'
import { InputPhoneArea, InputText } from './Inputs'
import { inputsConfig } from '../../constants/inputsConfig'



export const FormTeam = (props) => {
    const { language, formData, formErrors, handleChange } = props


    return (
        <form className="form col">
            <InputText
                {...generateFormInfo(formKeys._FIRSTNAME, language.index, formData, formErrors, handleChange)}
                maxLength={formInfo._FIRSTNAME.LANGUAGE[language.index].LETTER_MAX}
            />
            <InputText
                {...generateFormInfo(formKeys._LASTNAME, language.index, formData, formErrors, handleChange)}
                maxLength={formInfo._LASTNAME.LANGUAGE[language.index].LETTER_MAX}
            />

            <InputText
                {...generateFormInfo(formKeys._TELEPHONE, language.index, formData, formErrors, handleChange)}
                maxLength={inputsConfig.maxPhoneLenght}
                onKeyDown={true}
                phone={true}>
            </InputText>


            <InputText
                {...generateFormInfo(formKeys._POSTE, language.index, formData, formErrors, handleChange)}
            />
            <InputText
                {...generateFormInfo(formKeys._ACTIVITY, language.index, formData, formErrors, handleChange)}
            />
        </form>
    )
}
