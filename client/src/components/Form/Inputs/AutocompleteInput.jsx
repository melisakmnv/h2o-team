import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';

export const AutocompleteInput = (props) => {
  const { label, placeholder, error, setFormData, formData, language } = props;

  const [inputValue, setInputValue] = useState('');
  const [renderKey, setRenderKey] = useState(0);  // Nouvel état pour forcer le re-rendu
  const [currentLanguage, setCurrentLanguage] = useState(language.lang); // Nouvel état pour forcer le re-rendu

  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1); // Mise à jour de renderKey chaque fois que la langue change
    setCurrentLanguage(language.lang)
  }, [language]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    setFormData((prevState) => {
      return {
        ...prevState,
        activity: inputValue,
      };
    });
  };

  return (
    <div key={renderKey} className="info col"> 
      <div style={{ justifyContent: 'space-between' }} className="row gap05">
        <label>{label}</label>
        {error ? (
          <span style={{ fontSize: '8px', color: 'red' }}>{error}</span>
        ) : null}
      </div>

      <Autocomplete
        // apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
        key={currentLanguage}
        apiKey="AIzaSyAuQmrNcT9luy6wU1eLzxzbRprBLRbVj1c"
        onPlaceSelected={(place) => {
          setFormData((prevState) => {
            return {
              ...prevState,
              activity: place?.name,
            };
          });
        }}
        options={{
          types: ['locality'],
          componentRestrictions: { country: ['fr', 'bel'] },
          fields: ['name', 'formatted_address'],
        }}
        language={currentLanguage}
        placeholder={placeholder}
        defaultValue={formData.activity}
        style={{ border: error ? '1px solid red' : '1px solid #CCCCCC' }}
        onInput={handleInput}
        onBlur={handleBlur}
      />
    </div>
  );
};
