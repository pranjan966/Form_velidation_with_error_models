import React,{useState} from 'react';
import LiComponent from './liComponent';
const DisplayComponent = (props) => {
    return (
        <ul className='DisplayComponent '>
            {props.displayData.map((item, index) => (
                <LiComponent key={index} name={item.Name} age={item.Age}/>
            ))}
        </ul>
    )
   
   

}
export default DisplayComponent;