import React from 'react'
import { setFontSize } from '../../../utils/contents/setFontSize'

export const User = (props) => {

    const { children, fontFamily, fontSize, color, lineHeight, bg, height } = props



    return (
        <p display="block" style={{ display: "block", height: `${height}px`, background: bg, lineHeight: `${lineHeight}px`, margin: 0 }}>
            <span style={{
                display: "block",
                color: color,
                fontFamily: fontFamily,
                fontSize: setFontSize(children) + "px",
                lineHeight: `${lineHeight}px`,
                fontWeight: 600,
                textTransform: "uppercase",
            }}>
                {children}
            </span>
        </p>
    )
}
