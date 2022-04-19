import React from 'react';
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