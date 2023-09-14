import React from 'react'
import "./LangMenu.scss"
import { languages } from '../../utils'

export const LangMenu = ({ setLanguage, toggleLangModal, setFormData }) => {

    return (
        <div className="lang-menu">
            {languages.map((language, index) => (
                <div
                    className="lang-item"
                    key={language.id}
                    onClick={() => {
                        setLanguage(state => ({
                            lang: language.value,
                            index: index
                        }));
                        toggleLangModal(false)
                       
                    }}
                >
                    {language.value}
                </div>
            ))}
        </div>
    )
}
