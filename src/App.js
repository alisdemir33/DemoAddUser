import React, { useState } from 'react';
import UserForm from './Components/UserForm/UserForm'
import UserList from './Components/UserList/UserList'


function App() {

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
    setUserList((prevState) => {
      return [user, ...prevState]
    })
  }


  return (
    <div>
      <UserForm onAddUser={addUserHandler}>
      </UserForm>

      <UserList list={userList}></UserList>

    </div>
  );
}

export default App;
