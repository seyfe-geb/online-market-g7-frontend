import React, {useEffect} from 'react';
import "./User.css"


const User = (props) => {

    return (
        <div className="User">
            <p>Id : {props.uid}</p>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
        </div>
    );
};

export default User;