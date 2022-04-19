import React, {useState} from 'react';
import AxiosDataAccessService from "../../services/AxiosDataAccessService";
import {useEffect} from "react";
import User from "../../components/User/User";

const Users = () => {

    const uri = "users";
    const [users, setUsers] = useState([
        {id: 1, firstName: "Esei", lastName:"kahsai"},
        {id: 2, firstName: "Seyfe", lastName:"mamo"},
        {id: 3, firstName: "star", lastName:"tsegay"}
    ]);

    useEffect(()=>{
        AxiosDataAccessService.getAllEntities(uri)
            .then()
            .catch();
    },[])

    const usersList = users.map(user => {
        return(
            <User
                uid = {user.id}
                firstName = {user.firstName}
                lastName = {user.lastName}
                />
        );
    });
    return (
        <div>
            {usersList}
        </div>
    );
};

export default Users;