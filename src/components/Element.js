import React from 'react'
import Input from './elements/Input';
import Select from './elements/Select';
import Radio from './elements/Radio';

const Element = ({ field: { type, id, label, placeholder, options } }) => {

    switch (type) {
        case 'text':
            return (<Input
                id={id}
                label={label}
                placeholder={placeholder}
            />)
        case 'select':
            return (<Select
                id={id}
                label={label}
                placeholder={placeholder}
                options={options}
            />)
        case 'email':
            return (<Input
                id={id}
                label={label}
                placeholder={placeholder}
            />)
        case 'textarea':
            return (
                <textarea value={label} placeholder={placeholder}></textarea>
            )

        case 'radio':
            return(
                <Radio options={options}/>
            )    
        default:
            return null;
    }


}

export default Element