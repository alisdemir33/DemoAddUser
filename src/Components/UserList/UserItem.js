import React from 'react';

const UserItem = (props) =>{

    return(
        <div>
            <div>{props.userName}</div>
            <div>{props.userAge}</div>
        </div>
    );
}

export default UserItem;