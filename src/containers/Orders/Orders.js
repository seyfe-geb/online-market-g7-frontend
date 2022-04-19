import React from 'react';
import {useEffect, useState} from "@types/react";
import AxiosDataAccessService from "../../services/AxiosDataAccessService";
import User from "../../components/User/User";

const Orders = () => {

    const uri = "orders";
    const [orders, setOrders] = useState([
        {oid:1, price:"123"},
        {oid:2, price: "234"},
        {oid:3, price: "456"}
    ]);


    const ordersList = orders.map(order => {
        return(
            <User
                oid = {order.oid}
                price = {order.price}
            />
        );
    });
    return (
        <div>
            {ordersList}
        </div>
    );
};

export default Orders;