import React, {useEffect, useState} from 'react';
import Product from "../../components/Product/Product";
import AxiosDataAccessService from "../../services/AxiosDataAccessService";
import "./Products.css"
import {Link} from "@mui/material";

const Products = () => {

    const uri = "products";
    const [products, setProducts] = useState([
        // {id:1, name:"laptop", price:"1000", description:"I like it", quantity:"2"}
    ]);

    useEffect(()=>{
        AxiosDataAccessService.getAllEntities(uri)
            .then(res => setProducts(res.data))
            .catch(error => console.log(error.message));
    },[])



    const productList = products.map(pro => {
      return (
         <Link to={`${pro.id}`} key={pro.id}>
          <Product
        id={pro.id}
        name={pro.name}
        price={pro.price}
        description={pro.description}
        quantity={pro.quantity}
        key={pro.id}
        />
        </Link>);
    })
    return (
        <div className={"products"}>
            {productList}
            {/*<ProductDetails />*/}
        </div>
    );
};

export default Products;