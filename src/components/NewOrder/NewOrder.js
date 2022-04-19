import React, {useEffect, useRef, useState} from 'react';
import axiosDataAccessService from "../../services/AxiosDataAccessService";

const NewOrder = (props) => {

    const newOrderForm = useRef();
    const [orderState, setOrderState] = useState([]);

    const fetchOrder = async () => {
        axiosDataAccessService.addEntity("carts", orderState)
            .then(res => {
                setOrderState(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() =>{

        fetchOrder();
    },[])

    return (
        <div>
            <form ref={newOrderForm}>
                <h1> Add Orders</h1>
                <br/>
                <label> Id</label>
                <input type="text" label={"id"} name={"id"}/>
                <br/>
                <label> Price</label>
                <input type="text" label={"price"} name={"price"}/>
                <br/>
                <label> createdAt </label>
                <input type="text" label={"createdAt"} name={"createdAt"}/>
                <br/>
                <label> modifiedAt </label>
                <input type="text" label={"modifiedAt"} name={"modifiedAt"}/>
            </form>
            <button onClick={fetchOrder}>Add Order</button>
        </div>

    );
}

export default NewOrder;