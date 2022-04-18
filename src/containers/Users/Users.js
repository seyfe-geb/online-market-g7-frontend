import React, {useState} from 'react';
import AxiosDataAccessService from "../../services/AxiosDataAccessService";
import {useEffect} from "react";
import User from "../../components/User/User";

const Users = () => {

    const uri = "users";
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        AxiosDataAccessService.getAllEntities(uri)
            .then((res)=>{setUsers(res.data)})
            .catch(error => console.log("Error fetching users"));
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