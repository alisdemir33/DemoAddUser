import React, { useState } from 'react'
import Card from '../../UI/Card'
import classes from './UserFRom'

const UserForm = (props) => {

const [userName,setUserName] =useState('');
const [userAge, setUserAge]=useState('');

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
                id:Math.random()*1000,
                userName,
                userAge
            }
        )

    }
    return (
        <Card>
            <form onSubmit={addClickHandler}>
                <label htmlFor="UserName">User Name</label>
                <input type="text" name="UserName" value={userName} onChange={onUserNameChange} />
                <label htmlFor="UserAge">Age</label>
                <input type="text"  value={userAge} onChange ={onUserAgeChange}></input>
                <button type="submit">Add User</button>
            </form>
        </Card>
    );

}
export default UserForm;