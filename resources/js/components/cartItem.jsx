import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/cart";
import React from "react";

const CartItem = ({name}) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="cartItem p-2">
            <div className="controls">
                <button onClick={() => dispatch(cartActions.decreaseProductQty(name))}>
                    <i className="fa fa-minus"></i>
                </button>
                <span className="p-2">{cart['items'][name]['qty']}</span>
                <button onClick={() => dispatch(cartActions.increaseProductQty(name))}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <span className="item-name">{cart['items'][name]['name']}</span>
            <span className="price">
                {cart['items'][name]['price'] * cart['items'][name]['qty']}
            </span>
            <span className="remove-item" onClick={() => dispatch(cartActions.removeProduct(name))}>
                <i className="fa fa-minus"></i>
            </span>
        </div>
    )
}

export default CartItem