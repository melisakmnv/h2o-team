import React from 'react'
import title_FR from "../../../assets/title.png"
import title_NL from "../../../assets/title-nl3.png"

export const Title = ({ language }) => {

    const titles = [
        title_FR, title_NL
    ]
    
    return (
        <div>
            <img src={titles[language.index]} className="title-signature" alt="Créez votre signature" />
        </div>
    )
}
