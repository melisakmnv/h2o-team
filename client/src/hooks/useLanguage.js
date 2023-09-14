import React, { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useLanguage = (localStorageKey, objectLangDefault) => {

    const userLanguage = navigator.language
    const userLanguageCode = userLanguage.split(/[-_]/)[0].toUpperCase(); // language without region code
    const [language, setLanguage] = useLocalStorage(localStorageKey, objectLangDefault)


    function setDefaultLanguage() {
        if (userLanguageCode === "FR") {
            setLanguage({
                lang: "FR",
                index: 0,
            })

        } else {
            setLanguage({
                lang: "NL",
                index: 1,
            })
        }
    }

    useEffect(() => {
        setDefaultLanguage()
    }, [])


    return [language, setLanguage]
}
