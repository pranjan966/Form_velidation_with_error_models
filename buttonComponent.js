import React from "react";
import './buttonComponent.css'

const ButtonComponent = ( props) => {
    return (
        <button type={props.type} className={props.className} onClick={props.onClick}>{props.label}</button>)
    
}
export default ButtonComponent;