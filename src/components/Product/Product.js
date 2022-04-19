import React from 'react';

const Product = (props) => {
    return (
        <div>
            <p> {props.id}</p>
            <p> {props.name}</p>
            <p> {props.price}</p>
            <p> {props.description}</p>
            <p> {props.quantity}</p>
        </div>
    );
};

export default Product;