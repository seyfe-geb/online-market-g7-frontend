import React, {useState} from 'react';
import Order from "../../components/Order/Order";
import {useEffect} from "@types/react";
import AxiosDataAccessService from "../../services/AxiosDataAccessService";

const Orders = () => {

    const uri = "orders";

    const [orders, setorders] = useState([]);

    useEffect(()=>{
        AxiosDataAccessService.getAllEntities(uri)
            .then((res)=>{setUsers(res.data)})
            .catch(error => console.log("Error fetching users"));
    },[])

    const orderList = orders.map(order => {
        return <Order
            id={order.id}
            price={order.price}
            createdAt={order.createdAt}
            modifiedAt={order.modifiedAt}
            key={order.id}
        />
    })
    return (
        <div>
            {orderList}
        </div>
    );
};

export default Orders;