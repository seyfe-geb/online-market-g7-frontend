import React from 'react';
import Users from "../../containers/Users/Users";
import Products from "../../containers/Products/Products";
import NewUser from "../../components/NewUser/NewUser";

const Dashboard = () => {
    return (
        <div>
            <Users/>
            <Products/>
            <NewUser/>
        </div>
    );
};

export default Dashboard;