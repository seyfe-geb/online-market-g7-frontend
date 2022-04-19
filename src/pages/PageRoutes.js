import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Users from "../containers/Users/Users";
import Products from "../containers/Products/Products";
import NewUser from "../components/NewUser/NewUser";
import NewProduct from "../components/NewProduct/NewProduct";
import Orders from "../containers/Orders/Orders";
import NewOrder from "../components/NewOrder/NewOrder";
import Home from "../components/Home/Home";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="create-user" element={<NewUser/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="create-product" element={<NewProduct/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route path="create-order" element={<NewOrder/>}/>
        </Routes>
    );
};

export default PageRoutes;