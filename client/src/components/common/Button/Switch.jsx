import './Switch.scss'
import { languages } from '../../../utils';

export const Switch = ({ language, setLanguage }) => {

  const currentLanguage = languages.find((lang) => lang.value === language.lang).value;
  
  const handleLanguage = (languageButton) => {
    if (language.lang === "NL" && languageButton != currentLanguage) {
      setLanguage({
        lang: "FR",
        index: 0,
      })
    } if (language.lang === "FR" && languageButton != currentLanguage) {
      setLanguage({
        lang: "NL",
        index: 1,
      })
    }
  };

  const fr = languages[0].value;
  const nl = languages[1].value;

  return (
    <div className='switch-lang'>
      <div onClick={()=> handleLanguage(fr)} className={`switch-lang__btn ${language.lang === fr ? "on" : "off"}`}>{fr}<div className={`switch-lang__flag fr-flag`}></div></div>
      <div onClick={()=> handleLanguage(nl)} className={`switch-lang__btn ${language.lang === nl ? "on" : "off"}`}>{nl}<div className={`switch-lang__flag bel-flag `}></div></div>
    </div>
  )
};
