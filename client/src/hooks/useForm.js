import { useState } from 'react'
import { formErrorMessages } from '../utils'
import { useLocalStorage } from './useLocalStorage'

export const useForm = (localStorageKey, objectForm = {}) => {

    const [form, setForm] = useLocalStorage(localStorageKey, objectForm)
    const [formErrors, setFormErrors] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        if (event.target.files) {
            setForm((prevState) => {
                return {
                    ...prevState,
                    [name]: event.target.files[0],
                };
            });
        } else {
            setForm((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                };
            });
        }
    }


    const validateValue = (values) => {
        const errors = {}
        Object.keys(values).forEach(key => {
            if (!values[key]) {
                errors[key] =    formErrorMessages["REQUIRED"]
            }
        });
        return errors;
    }

    const verifyInputErrors = (event) => {
        event.preventDefault()
        console.log("verifyinggg")
        console.log(formErrors)
        setFormErrors(validateValue(form))
    }
    
    return [form, setForm, formErrors, handleChange, verifyInputErrors]
}