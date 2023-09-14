import React from 'react'

export const Table = (props) => {

    const { children, className, bg, w } = props
    return (
        <table width={w} className={className} cellPadding="O" cellSpacing="0" style={{ width: w, borderSpacing: 0, borderCollapse: "collapse", background: bg, boxSizing:"border-box" }}>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}
