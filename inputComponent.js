import React from "react";
import './inputComponent.css';

const InputComponent = (props) => {
    const inputClasses = [];
    const labelClasses = ['label'];
    if (props.className) {
        inputClasses.push(props.className);
    } else {
        inputClasses.push('input');
    }
    if (props.error) {
        labelClasses.push('label-error');
        inputClasses.push('input-error');
    }
    return (
        <div className='inputComponent'>
            <label className={labelClasses.join(' ')} for={props.for}>{props.label}</label>
            <input className={inputClasses.join(' ')} type={props.type} name={props.name} id={props.id} onChange={props.onChange} onBlur={props.onFocus}/>
        </div>
    )
}
export default InputComponent;