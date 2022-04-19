import React from 'react';
import Users from "../../containers/Users/Users";
import Products from "../../containers/Products/Products";
import NewUser from "../../components/NewUser/NewUser";
import PageRoutes from "../PageRoutes";
import Header from "../../containers/Headers/Header";

const Dashboard = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <PageRoutes />
            </div>

        </div>
    );
};

export default Dashboard;