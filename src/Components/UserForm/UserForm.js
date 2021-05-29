import React, { useState } from 'react'
import Card from '../../UI/Card'
import buttonStyle from '../../UI/Button.module.css'
import inputStyles from './UserForm.module.css'


const UserForm = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const onUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    const onUserAgeChange = (event) => {
        setUserAge(event.target.value)
    }

    const addClickHandler = (event) => {
        event.preventDefault()

        props.onAddUser(
            {
                id: Math.random() * 1000,
                userName,
                userAge
            }
        );

        setUserAge('');
        setUserName('')

    }
    return (
        <Card className={inputStyles.input}>
            <form onSubmit={addClickHandler}>
                <label htmlFor="userName">User Name</label>
                <input type="text" id="userName" value={userName} onChange={onUserNameChange} />
                <label htmlFor="userAge">Age</label>
                <input type="text" id="userAge" value={userAge} onChange={onUserAgeChange}></input>
                <button className={buttonStyle.button} type="submit">Add User</button>
            </form>

        </Card>
    );

}
export default UserForm;