import React from 'react';
import {useEffect, useState} from "react";
import AxiosDataAccessService from "../../services/AxiosDataAccessService";
import User from "../../components/User/User";
import Order from "../../components/Order/Order";

const Orders = () => {

    const uri = "orders";
    const [orders, setOrders] = useState([
        {oid:1, price:"123"},
        {oid:2, price: "234"},
        {oid:3, price: "456"}
    ]);

    useEffect(()=>{
        AxiosDataAccessService.getAllEntities(uri)
            .then(res => setOrders(res.data))
            .catch(error => console.log(error.message));
    },[])


    const ordersList = orders.map(order => {
        return(
            <Order
                oid = {order.id}
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