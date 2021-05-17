import React from 'react';
import UserItem from './UserItem'

const UserList = (props) => {

    console.log(props.list);

    return (
        <div>
            {  props.list.map((user) => {
                return <UserItem userName={user.userName} userAge={user.userAge}></UserItem>
            })
            }
        </div>
    );
}

export default UserList;