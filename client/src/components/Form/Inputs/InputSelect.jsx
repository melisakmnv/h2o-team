import React from 'react'

export const InputSelect = (props) => {

    
    const { label, name, value, onChange, id, postes, error, placeholder, language } = props

    return (
        <div className="info col">
            <div style={{ justifyContent: "space-between" }} className="row gap05">
                <label>{label}</label>
                {error ? <span style={{ fontSize: "8px", color: "red" }}>{error}</span> : null}
            </div>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                style={{ border: error ? "1px solid red" : "1px solid #CCCCCC" }}
            >
                {postes.map((poste) => {
                    return (
                        <optgroup key={poste.posteCategory.LANG[language.index].category} label={poste.posteCategory.LANG[language.index].category}>
                            <option value="" disable="disable" hidden>{placeholder}</option>
                            {poste.postes.map((p) => {
                                return (
                                    <option key={p.id} value={p.LANG[language.index].value}>{p.LANG[language.index].label}</option>
                                )
                            })}
                        </optgroup>
                    )
                })}
            </select>
        </div>
    )
}
