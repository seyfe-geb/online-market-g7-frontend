import React, {useEffect, useState} from 'react';
import Product from "../../components/Product/Product";

const Products = () => {

    const uri = "products";
    const [products, setproducts] = useState([
        {id:1, name:"laptop", price:"1000", description:"I like it", quantity:"2"}
    ]);

    useEffect(() => {

    })

    const productList = products.map(pro => {
      return  <Product
        id={pro.id}
        name={pro.name}
        price={pro.price}
        description={pro.description}
        quantity={pro.quantity}
        key={pro.id}
        />
    })
    return (
        <div>
            {productList}
        </div>
    );
};

export default Products;