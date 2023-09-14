import React from 'react'
import { LangMenu } from '../Modal/LangMenu'

export const Language = ({ language, toggleLangModal, setLanguage, langModal, setFormData }) => {

    return (
        <>
            <button
                className="lang-btn"
                onClick={toggleLangModal}
            >
                {language.lang}
            </button>
            {langModal && <LangMenu setLanguage={setLanguage} toggleLangModal={toggleLangModal} setFormData={setFormData} />}
        </>
    )
}
