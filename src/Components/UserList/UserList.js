import React from 'react';
import UserItem from './UserItem'
import classes from './UserList.module.css'
import Card from '../../UI/Card';

const UserList = (props) => {

    console.log(props.list);

    return (
        <Card className={classes.users}>
            <ul>
                {props.list.map((user) => {
                    return <li> <UserItem userName={user.userName} userAge={user.userAge}></UserItem></li>
                })
                }
            </ul>
        </Card>
    );
}

export default UserList;