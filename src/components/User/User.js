import React, {useEffect} from 'react';


const User = (props) => {

    return (
        <div>
            <p>UserId : {props.uid}</p>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
        </div>
    );
};

export default User;