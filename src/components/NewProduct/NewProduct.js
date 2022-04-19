import React, {useRef} from 'react';
import {useNavigate} from "react-router";

const NewProduct = () => {

   const navigate = useNavigate();
  const newProductForm = useRef();

  const addBottonClicked = {}

    return (
        <div className="NewProduct">
        <form ref={newProductForm}>
            <h1> Add Product</h1>

            <label>Name </label>
            <input type ="text" label={"name"} name={"name"}/>
            <br/> <br/>
            <label>Price </label>
            <input type="text" label={"price"} name={"price"}/>
            <br/> <br/>
            <label>Description </label>
            <input type="text" label={"description"} name={"description"}/>
            <br/> <br/>
            <label>Quantity </label>
            <input type="text" label={"quantity"} name={"quantity"}/>
        </form>
            <br/><br/>
            <button> Add Product </button>
        </div>
    );
};

export default NewProduct;