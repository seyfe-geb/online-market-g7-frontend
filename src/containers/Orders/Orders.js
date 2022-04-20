import React from 'react';
import {useEffect, useState} from "react";
import AxiosDataAccessService from "../../services/AxiosDataAccessService";
import './Orders.css'
import Order from "../../components/Order/Order";
import order from "../../components/Order/Order";


const Orders = () => {

    const uri = "orders";
    const [orders, setOrders] = useState([
        {id:1, price:"123",Date:'2022-04-17',status:"ordered",address:{street: "andover",apartmentNo: "10",city: "oakland",state:"cali",zipcode: "94609"}},
        {id:2, price: "234",Date:'2022-04-18',status:"Delivered", address: {street: "rosa",apartmentNo: "110",city: "Sf",state:"cali",zipcode: "94639"}},
        {id:3, price: "456",Date:'2022-04-19',status:"On the way", address:{street: "MacArthur",apartmentNo: "210",city: "san jose",state:"cali",zipcode: "94509"}}
    ]);

    // useEffect(()=>{
    //     AxiosDataAccessService.getAllEntities(uri)
    //         .then(res => setOrders(res.data))
    //         .catch(error => console.log(error.message));
    // },[])


    const orderList = orders.map(order => {
        return(
            <Order
                id = {order.id}
                price = {order.price}
                Date ={order.Date}
                status = {order.status}
                // address ={order.address}
            />
        );
    });
    return (
        <div className="orderPage">
            {orderList}
            <h2>Order Page</h2>
            <div className="order">
                <span>Order ID: {order.id}</span>
                <br/>
                <span>Order Date: {order.Date}</span>
                <br/>
                <span>Order Status: {order.status}</span>
                <br/>
                <span>Order Total: ${order.price}</span>
                <br/>
            </div>

            {/*<div className="order-content">*/}
            {/*    <div className="order-content-items">*/}
            {/*        <h4>Order Items:</h4>*/}
            {/*        <br/>*/}
            {/*        <div className="order-content-item">*/}
            {/*            {order.orderItems && order.orderItems.map((item) => (*/}
            {/*                    <div className="productCard" key={item.id}>*/}
            {/*                        <h4>{item.product.name}</h4>*/}
            {/*                        <p>Quantity: {item.quantity}</p>*/}
            {/*                        <p>Price: {item.product.price}</p>*/}
            {/*                    </div>*/}
            {/*                )*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="order-content-details">*/}
            {/*        <h4>Order Details:</h4>*/}
            {/*        <div className="order-content-details-inner">*/}
            {/*            <p>Name: {order.user && order.user.firstName} {order.user && order.user.lastName}</p>*/}
            {/*            <p>Email: {order.user && order.user.email}</p>*/}
            {/*            <p>Shipping Address: <span>*/}
            {/*                {order.address && order.address.street}<br />*/}
            {/*                {order.address && order.address.city} {order.address && order.address.state} {order.address && order.address.zipcode}*/}
            {/*            </span></p>*/}
            {/*            <br/>*/}
            {/*            <p>Payment Info</p>*/}
            {/*                <span>*/}
            {/*                    Payment Type: {order.paymentMethod && order.paymentMethod.type}*/}
            {/*                    <br/>*/}
            {/*                    Card Number: {order.paymentMethod && order.paymentMethod.number}*/}
            {/*                </span>*/}
            {/*        </div>*/}
            {/*        <br />*/}
            {/*        <div className="price">*/}
            {/*            <p>Order Total: ${order.price}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Orders;