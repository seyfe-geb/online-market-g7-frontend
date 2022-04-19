import React, {useRef} from 'react';
import {useNavigate} from "react-router";
import AxiosDataAccessService from "../../services/AxiosDataAccessService";

const NewProduct = () => {


  const newProductForm = useRef();

  const addButtonClicked = ()=>{
      const form = newProductForm.current;
      const data = {
          name:form['name'].value,
          price:form['price'].value,
          description:form['description'].value,
          quantity:form['quantity'].value,
          id:1
      }
      AxiosDataAccessService.addEntity('products',data)
          .then(response =>{console.log('Successfully added:',response)})
          .catch(err =>{console.log('Error :', err)})
  }



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
            <button onClick={addButtonClicked}> Add Product </button>
        </div>
    );
};

export default NewProduct;