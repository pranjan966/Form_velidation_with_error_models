import React , {useState, useRef} from "react";
import InputComponent from "./inputComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import './formComponent.css'
import CardComponent from "../cardComponent/cardComponent";
import ErrorModel from "../UI/errorModel";



const FormComponent = (props) => {

    const [formState, setFormState] = useState(props.formData);
    const [error,setError] = useState();

    const validateForm = (userDataArray) => {
        const errorFields = userDataArray.filter(item => !item.isValid);
        if(errorFields.length > 0) {
            setError({...errorFields[0].error});
            return false;
        }
        return true;
    }
   
    const formSubmitHandler = (e) => {
        e.preventDefault()
        
        const userDataArray = formState.filter(item => (item.id !== 'submit')            
        );
        if(validateForm(userDataArray)) {
            // save the state
            const dataObj = userDataArray.reduce((accum, curr) => {
                return {    
                    ...accum,
                    [curr.id]: curr.value
                }
            }, {} )
            props.addUser(dataObj);
        }
    };
    
    const validateInput = (value, key) => {
        switch(key) {
            case 'Name': if(value.trim()==='') return false; 
                break;
            case 'Age': if(value.trim() < 0) return false;
                break;
            default: break;
        }
        return true;
    }

    const focusHandler = (key) => {
        const updatedFormState = formState.map(item => {
            if(item.id === key) {
                return {
                    ...item,   
                    isTouched: true,           
                }
            }
            return item;
        });
        setFormState(updatedFormState);  
    }
    
    const inputChangedHandler = (event, key) => {
        const updatedFormState = formState.map(item => {
            if(item.id === key) {
                return {
                    ...item,   
                    isValid: validateInput(event.target.value, key),
                    value  : event.target.value
                }
            }
            return item;
        });

        setFormState(updatedFormState);     
    }

    function renderInputs() {
        const inputData = formState.filter(item => item.id !== 'submit');

        const inputComponentArray = inputData.map(item => {
            return (
              <InputComponent
                error={!item.isValid && item.isTouched && item.error}
                key={item.id}
                for={item.id} 
                type={item.type}
                name={item.id}
                label={item.id}
                id={item.id}
                onChange={(event) => inputChangedHandler(event, item.id)}
                onFocus={() => focusHandler(item.id)}
              />
            );
        })
        return inputComponentArray
    }
    const errorHandler = () =>{
        setError(null)
    }

    return (
        <div>
        {error &&  <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>} 
         <form onSubmit={formSubmitHandler} className='formComponent'>
            {formState && 
                <>
                    <div className="formInputs" >
                    {renderInputs()}
                    </div> 
                    <ButtonComponent type='submit' label='Add' className='buttonComponent'></ButtonComponent>
            
                </>
            }    
         </form>
        </div>
    )
}

export default FormComponent;