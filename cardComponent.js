import React from "react";
import './cardComponent.css'



const CardComponent = (props) => {
   
    return (
        <div className={props.className || 'cardComponent'}>
            {props.children}
        </div>
    )
}
export default CardComponent;