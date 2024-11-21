import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Input = ({ id, label, placeholder }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder={placeholder ? placeholder : ''}
                onChange={event => handleChange(id, event)}
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
    )
}

export default Input