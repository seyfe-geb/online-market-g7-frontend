import React, {useEffect} from 'react';


const User = (props) => {

    return (
        <div className="user">
            <p>Id : {props.uid}</p>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
        </div>
    );
};

export default User;