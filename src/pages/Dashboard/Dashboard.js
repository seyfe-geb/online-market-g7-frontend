import React from 'react';
import Users from "../../containers/Users/Users";
import Products from "../../containers/Products/Products";
import NewUser from "../../components/NewUser/NewUser";
import Orders from "../../containers/Orders/Orders";

const Dashboard = () => {
    return (
        <div>
            <Users/>
            <Products/>
            <NewUser/>
            <Orders/>
        </div>
    );
};

export default Dashboard;