import {Link} from "react-router-dom";
import React, {useState,useEffect} from 'react';
import AxiosDataAccessService from "../../services/AxiosDataAccessService";


const Cart = (props) => {

    const uri = "carts";
    const { cartItems, Add, Remove } = props;

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(
        () =>
            setTotalPrice(
                cartItems.reduce((total, item) => total + item.price * item.Qty, 0)
            ),
        [cartItems]
    );
    // useEffect(()=>{
    //     AxiosDataAccessService.getAllEntities(uri)
    //         .then(res => setTotalPrice(res.data))
    //         .catch(error => console.log(error.message));
    // },[cartItems])

    return (
        <div className="cart">
            {cartItems.map((item) => (
                <div className="item">
                    <div>
                        {item.name}{" "}
                        <h4>
                            {item.Qty}x ${item.price}
                        </h4>
                    </div>

                    <div className="col-2">
                        <button onClick={() => Add(item)} className="btn">
                            +
                        </button>
                        <button onClick={() => Remove(item)} className="btn">
                            -
                        </button>
                    </div>
                </div>
            ))}

            <h3>{totalPrice > 0 ? "Total price: $" + totalPrice : ""}</h3>
            {cartItems.length > 0 ? (
                <Link to="/checkout" state= {{cartItems:cartItems}}>
                    {" "}
                    <button className="btn btnCheckout">checkout</button>
                </Link>
            ) : (
                ""
            )}
        </div>
    );
};

export default Cart;
