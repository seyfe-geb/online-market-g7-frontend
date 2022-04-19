import React, {Fragment, useState} from 'react';
import AxiosDataAccessService from "../../services/AxiosDataAccessService";
import {useEffect} from "react";
import User from "../../components/User/User";
import "./Users.css"
import {Nav, Navbar} from "react-bootstrap";
import {Container} from "@mui/material";

const Users = () => {

    const uri = "users";
    const [users, setUsers] = useState([
        // {id: 1, firstName: "Esei", lastName:"kahsai"},
        // {id: 2, firstName: "Seyfe", lastName:"mamo"},
        // {id: 3, firstName: "star", lastName:"tsegay"}
    ]);

    useEffect(()=>{
        AxiosDataAccessService.getAllEntities(uri)
            .then(res => setUsers(res.data))
            .catch();
    },[])

    const usersList = users.map(user => {
        return(
            <User
                Userid = {user.id}
                firstName = {user.firstName}
                lastName = {user.lastName}
                />
        );
    });
    return (
             <div className="Users">
                 {usersList}
             </div>


    );
};

export default Users;