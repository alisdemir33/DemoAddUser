import React from 'react';
import classes from './ListItem.module.css'

const UserItem = (props) =>{

    return(
        <div >            
                <span className={classes.list_item__boxed}>Name: {props.userName}</span>            
                <span className={classes.list_item__boxed}> Age: {props.userAge}</span> 
        </div>
    );
}

export default UserItem;