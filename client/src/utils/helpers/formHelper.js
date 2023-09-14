import { formInfo } from "../contents";

export const generateFormInfo = (formInfoKey, languageIndex, formData, formErrors, handleChange) => {
    return {
        label: formInfo[formInfoKey].LANGUAGE[languageIndex].LABEL,
        placeholder: formInfo[formInfoKey].LANGUAGE[languageIndex].PLACEHOLDER,
        name: formInfo[formInfoKey].NAME,
        id: formInfo[formInfoKey].ID,
        value: formData[formInfo[formInfoKey].NAME],
        onChange: handleChange,
        error: formErrors[formInfo[formInfoKey].NAME]?.LANGUAGE[languageIndex].MESSAGE
    };
};
