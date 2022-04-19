import React, {useEffect} from 'react';
import "./User.css"


const User = (props) => {

    return (
        <div className="User">
            <p>Id : {props.uid} &nbsp; &nbsp; &nbsp; First Name: {props.firstName} &nbsp; &nbsp; &nbsp; Last Name: {props.lastName}</p>
        </div>
    );
};

export default User;