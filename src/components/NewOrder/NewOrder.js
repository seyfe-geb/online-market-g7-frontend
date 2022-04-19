import React, {useState} from 'react';

const NewOrder = (props) => {

const NewOrder = () => {


    function newOrderForm() {

    }

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
        <div>
            <form ref={newOrderForm}>
                <h1> Add Orders</h1>

                <label> Name</label>
                <input type="text" label={"id"} name={"id"}/>
                <br/> <br/>
                <label> Price</label>
                <input type="text" label={"price"} name={"price"}/>
                <br/> <br/>
                <label> </label>
                <input type="text" label={"createdAt"} name={"createdAt"}/>
                <br/> <br/>
                <label> </label>
                <input type="text" label={"modifiedAt"} name={"modifiedAt"}/>
            </form>
            <br/><br/>
            <button> Add Order </button>

        </div>
    );
};

export default NewOrder;