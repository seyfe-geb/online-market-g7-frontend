import React from 'react';

const Order = (props) => {
    return (
        <div>

             <p>OrderId: {props.oid}</p>
            <p>price:{props.price}</p>
        </div>
    );
};

export default Order;