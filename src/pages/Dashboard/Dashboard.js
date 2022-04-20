import React, {useState} from 'react';
import PageRoutes from "../PageRoutes";
import Header from "../../containers/Headers/Header";
import Cart from "../../components/Cart/Cart";
import {SelectedProductId} from "../../store/SelectedProductId";

const Dashboard = () => {
    const [productId, setProductId] = useState(0);
    const setSelectedProductId = (id) =>{
        setProductId(id);
    }
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