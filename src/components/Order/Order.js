import React from 'react';

const Order = (props) => {


    return (
        <div>
          <p>{props.id}</p>
          <p>{props.price}</p>
          <P>{props.createdAt}</P>
          <P>{props.modifiedAt}</P>
        </div>
    );
}

export default Order;