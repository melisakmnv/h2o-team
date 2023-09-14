import React from 'react'

export const Avatar = (props) => {
    const { src, width, height } = props

    return (
        <p
            style={{
                display: "block",
                width: `${width}px`,
                height: "inherit",
                margin: 0,
                fontSize: 0,
                lineHeight: "initial"
            }}
        >
            <span style={{ fontSize: 0 }}>
                <a target="_blank">
                    <img
                        width={width}
                        height={height}
                        src={src}
                        style={{ width: width, height: height, display: "block", borderRadius: "50%", maxHeight: `${height}px`, maxWidth: `${width}px`, verticalAlign: "bottom" }}
                    />
                </a>
            </span>
        </p>
    )
}
