import React from 'react'

export const IconLink = ({ width, height, bg, src, alt, link }) => {
    return (
        <p
            style={{
                display: "block",
                background: bg,
                width: width && `${width}px`,
                height: "inherit",
                margin: 0,
                fontSize: 0
            }}>
            <span style={{ fontSize: 0, lineHeight: "10px" }}>
                <a href={link} target="_blank">
                    <img
                        width={width}
                        height={height}
                        src={src}
                        alt={alt}
                        style={{ display: "block", maxHeight: `${height}px`, maxWidth: `${width}px`, verticalAlign: "bottom" }}
                    />
                </a>
            </span>
        </p>
    )
}
