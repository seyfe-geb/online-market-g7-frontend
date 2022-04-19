import React, {useState} from 'react';

const NewOrder = (props) => {

    const [orderState, setOrderState] = useState({
        id: "",
        price: "",
        Date: "",
        status: "",
        address:{
            street: "",
            apartmentNo:"",
            city:"",
            state:"",
            zipcode:""
        }
    })

    return (
      <div className="NewOrder">
          <h1>Add Order</h1>

          <label> Id </label>
          <input type= "text" label={'id'} name={'id'} value={orderState.id} />
          <br/><br/>
          <label> Price </label>
          <input type= "text" label={'price'} name={'price'} value={orderState.price} />
          <br/><br/>
          <label> Date </label>
          <input type="text" label={'Order Date'} name={'Order Date'} value={orderState.Date.toLocaleString() + ""} />
          <br/><br/>
          <label> Status </label>
          <input type= "text" label={"status"} name={'Order status'} value={orderState.status} />
          <br/><br/>
          <label> Address </label>
          <input type= "text" label={"address"} name={'Shipping Address'} value={orderState.address.street} />
          <br/><br/>
          <br/><br/>
          <button>Add Order</button>
      </div>
    );
};

export default NewOrder;