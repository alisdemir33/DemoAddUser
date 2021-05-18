import React from 'react';

const UserItem = (props) =>{

    return(
        <div>
            <div><span> Name: {props.userName}</span> 
            <span></span>
            <span> Age: {props.userAge}</span> </div>
        </div>
    );
}

export default UserItem;