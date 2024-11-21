import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Radio = ({ options }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <>
            {options.length > 0 && options.map((option, i) => (
                <div key={i}>
                    <input 
                        type="radio" 
                        id={`option-${i}`} 
                        value={option.value} 
                        onChange={handleChange} 
                    />
                    <label htmlFor={`option-${i}`}>{option.label}</label>
                </div>
            ))}
        </>
    )
}

export default Radio;