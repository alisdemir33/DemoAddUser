import React from 'react';
import UserItem from './UserItem'
import classes from './UserList.module.css'

const UserList = (props) => {

    console.log(props.list);

    return (
        <div className={classes.users}> 
           <ul>
            {  props.list.map((user) => {
                return <li> <UserItem userName={user.userName} userAge={user.userAge}></UserItem></li>
            })
            }
            </ul>
        </div>
    );
}

export default UserList;