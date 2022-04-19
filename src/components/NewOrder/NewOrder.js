import React, {useState} from 'react';

const NewOrder = (props) => {

    const [orderState, setOrderState] = useState({
        id: "",
        price: ""
    })

    return (
      <div className="NewOrder">
          <h1>Add Order</h1>

          <label>Id</label>
          <input type="text" label={'id'} name={'id'} value={orderState.id} />
          <br/><br/>
          <label>Price</label>
          <input type="text" label={'price'} name={'price'} value={orderState.price} />
          <br/><br/>
          <button onClick={orderState}>Add Order</button>
      </div>
    );
};

export default NewOrder;