import React from 'react'


export const Close = ({toggle}) => {
    return (
        <div>
            <button onClick={() => toggle(false)} className="close-btn">X</button>
        </div>
    )
}
