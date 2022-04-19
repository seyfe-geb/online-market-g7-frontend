import React, {useState} from 'react';
import axiosDataAccessService from "../../services/AxiosDataAccessService";



const NewOrder = () => {




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
    });
    axiosDataAccessService.addEntity('cart',orderState)
        .then(response=>{console.log(response)})
        .catch(err=>{console.log(err)})

    return (
        <div>

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

            <br/><br/>
            <button> Add Order </button>

        </div>
    );
};

export default NewOrder;