import React from 'react';

const NewProduct = () => {

  //  const navigate = useNavigate();


    return (
        <div>
        <form ref={newProductForm}>
            <h1> Add Product</h1>

            <label> Name</label>
            <input type="text" label={"name"} name={"name"}/>
            <br/> <br/>
            <label> Price</label>
            <input type="text" label={"price"} name={"price"}/>
            <br/> <br/>
            <label> </label>
            <input type="text" label={"description"} name={"description"}/>
            <br/> <br/>
            <label> </label>
            <input type="text" label={"quantity"} name={"quantity"}/>
        </form>
            <br/><br/>
            <button> Add Product </button>
        </div>
    );
};

export default NewProduct;