import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/users"> Users</Link></li>
                    <li><Link to="/create-user"> New User </Link></li>
                    <li><Link to="/products"> Products</Link></li>
                    <li><Link to="/create-product"> New Product </Link></li>
                    <li><Link to="/orders"> Orders</Link></li>
                    <li><Link to="/create-order"> New Order </Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;