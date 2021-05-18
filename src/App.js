import React, { useState } from 'react';
import UserForm from './Components/UserForm/UserForm'
import UserList from './Components/UserList/UserList'
import mainStyle from  './UI/App.module.css'
import ErrorModal from './UI/ErrorModal'


function App() {
    const[error,setError] = useState(false);
    const[errorMessage,setErrorMessage] = useState('');
  
  const [userList, setUserList] = useState(
  [ 
     {
      id: Math.random() * 100,
      userName: 'ali',
      userAge: 30
    },
    {
      id: Math.random() * 100,
      userName: 'veli',
      userAge: 50
    }
  ]
  )

  const addUserHandler = (user) => {
   
    if(user.userAge>50){
      setError(true);
      setErrorMessage('yavaşş')
      return;
    }
   
    setUserList((prevState) => {
      return [user, ...prevState]
    })
  }

  const clear = () =>{
    setError(false);
  }



  return (
   
   
    <div className={mainStyle.mainBox}>
       {error && <ErrorModal onClose={clear}> {errorMessage}</ErrorModal>}
      <UserForm onAddUser={addUserHandler}>
      </UserForm>

      <UserList list={userList}></UserList>

    </div>
  );
}

export default App;
