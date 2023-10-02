import React from "react";
import ButtonComponent from "../buttonComponent/buttonComponent";
import "./errorModel.css"
const ErrorModel = (props) => {
        console.log(props)
    return (

        <div>
            <div className="backdrop" onClick={props.onConfirm}/>
            <div className="modal" >
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p><br/>
                </div>
                <footer className="actions">
                    <ButtonComponent label='Okay' onClick={props.onConfirm} ></ButtonComponent>
                </footer>
            </div>
        </div>
    )

}
export default ErrorModel;