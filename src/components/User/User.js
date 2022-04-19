import React, {Fragment, useEffect} from 'react';
import "./User.css"
import {Card} from "@mui/material";
import Header from "../../containers/Headers/Header";


const User = (props) => {

    return (
        // <Fragment>
        // <Header/>
        // <Card border="secondary" style={{ width: '18rem' }}>
        //     <Card.Header>{props.Userid}</Card.Header>
        //     <Card.Body>
        //         <Card.Title>{props.firstName} {props.lastName}</Card.Title>
        //         <Card.Text>
        //             Some quick example text to build on the card title and make up the bulk
        //             of the card's content.
        //         </Card.Text>
        //     </Card.Body>
        // </Card>
        // </Fragment>
        <div className="User">
            <p>Id : {props.uid} &nbsp; &nbsp; &nbsp; First Name: {props.firstName} &nbsp; &nbsp; &nbsp; Last Name: {props.lastName}</p>
        </div>
    );
};

export default User;