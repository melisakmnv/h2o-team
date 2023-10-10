import React, { useEffect, useRef } from 'react'
import { useForm } from '../../hooks'
import { FormTeam } from '../Form'
import { LayoutLeft, LayoutRight } from '../common'
import { SignTeam } from '../Signature'
import { defaultTeamForm } from '../../constants/inputsConfig'

export const TeamVersion = ({ language, setLanguage }) => {

    const languageRef = useRef(language);

    const [formData, setFormData, formErrors, handleChange, verifyInputErrors] = useForm("form_Team",
        defaultTeamForm)


    useEffect(() => {
        if (language.lang !== languageRef.current.lang) {
            setFormData(defaultTeamForm);
        }
    }, [language])

    return (
        <div className="App">
            <main>
                <LayoutLeft
                    language={language}
                    setLanguage={setLanguage}
                    formErrors={formErrors}
                    setFormData={setFormData}
                    formData={formData}
                >
                    <FormTeam
                        formData={formData}
                        setFormData={setFormData}
                        formErrors={formErrors}
                        handleChange={handleChange}
                        language={language}
                    />
                </LayoutLeft>
                <LayoutRight
                    language={language}
                    formErrors={formErrors}
                    verifyInputErrors={verifyInputErrors}
                >
                    <SignTeam formData={formData} language={language} />
                </LayoutRight>
            </main>
        </div>
    )
}
