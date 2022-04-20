import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';
import {Nav, Navbar} from "react-bootstrap";
import {Container} from "@mui/material";

const Header = () => {
    return (
        <Navbar className="justify-content-center" fill variant="tabs" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home">G7 Online Shopping</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/users">Users</Nav.Link>
                    <Nav.Link href="/create-user">New User</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/create-product">New Product</Nav.Link>
                    <Nav.Link href="/orders">Orders</Nav.Link>
                    <Nav.Link href="/create-order">New Order</Nav.Link>
                    <Nav.Link href="/carts">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;