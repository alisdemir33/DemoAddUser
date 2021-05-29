import React, { useState } from 'react';
import UserForm from './Components/UserForm/UserForm'
import UserList from './Components/UserList/UserList'
import mainStyle from './UI/App.module.css'
import ErrorModal from './UI/ErrorModal'
import Card from './UI/Card'


function App() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

    if (user.userAge.length === 0 || user.userAge > 50) {
      setError(true);
      setErrorMessage('yavaşş!! az küçük yaş gir..')
      return;
    }

    if (user.userName.length <= 0) {
      setError(true);
      setErrorMessage('ad gir ülen')
      return;
    }

    setUserList((prevState) => {
      return [user, ...prevState]
    })

  }

  const clear = () => {
    setError(false);
  }
  return (   
    <Card className={mainStyle.mainBox}>
      {error && <ErrorModal title="Error Occurred" message={errorMessage} onClose={clear}> </ErrorModal>}
      <UserForm onAddUser={addUserHandler}>
      </UserForm>
      <UserList list={userList}></UserList>
    </Card>  
  );
}

export default App;
