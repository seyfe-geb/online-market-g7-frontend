import React from 'react';

const Order = (props) => {
    return (
        <div>
            <p>OrderId: {props.id}</p>
            <p>price:{props.price}</p>
            <p>Date: {props.Date}</p>
            <p>status:{props.status}</p>
            {/*<p>Address:{props.address}</p>*/}
        </div>
    );
};

export default Order;