import React, {useState} from 'react';
import CardComponent from './cardComponent/cardComponent';
import FormComponent from './formComponent/formComponent';

import DisplayComponent from './displayComponent/displayComponent';
// import FormComponent from './formComponent/formComponent';


function App() {
  const [userList, setUserList] = useState([])
//   const addUserHandler =( useState) =>{
    // console.log(Use)
  // }

  const formData=[
        {
            id: 'Name',
            type: 'text',
            isValid: false,
            isTouched: false,
            error: {
              title: 'Invalid Name',
              message: 'Name should not be empty'
            },
            value: ''
        },
      {
            id: 'Age',
            type: 'number',
            isValid: false,
            isTouched: false,
            error: {
              title: 'Invalid Age',
              message: 'Enter valid age'
            },
            value: '',
        },
       {
            id: 'submit',
            type: 'submit',
            isValid: false,
            value: 'Save'
        }
    ]
  
    const addUserHandler = (dataObj) =>{
      console.log(dataObj)
      setUserList(prevstate => {
        const updatedUser = [...prevstate, dataObj]
        return updatedUser
      })
      
    }

    // console.log(userList)
  return (
    <div>
      <CardComponent>
        <FormComponent formData={formData} addUser={addUserHandler} />
      </CardComponent>
      {userList.length !== 0 && (
        <CardComponent>
          <DisplayComponent displayData={userList} />
        </CardComponent>
      )}
    </div>
  );
  }

export default App;
