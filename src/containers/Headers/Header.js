import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/users"> Users</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;