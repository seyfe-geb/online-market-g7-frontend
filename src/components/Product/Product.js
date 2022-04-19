import React from 'react';
import "./Product.css"

const Product = (props) => {
    return (
        <div className={"product"}>
            <p> {props.id}</p>
            <p> {props.name}</p>
            <p> {props.price}</p>
            <p> {props.description}</p>
            <p> {props.quantity}</p>
        </div>
    );
};

export default Product;