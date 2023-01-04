import React, { useEffect, useState } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cart";
import { productActions } from "../redux/product";

function menuItem({product}) {
    const dispatch = useDispatch();  
    const [item_has_sizes, set_item_has_size] = useState(false);

    const addTocart = () => {
        dispatch(cartActions.addProduct(product));
    }

    const setSizes = () => {
        const sizes = JSON.parse(product['sizes'])
        console.log(sizes)
        dispatch(productActions.setProduct({...product, ...sizes}))
    }

    useEffect(() => {
        if(product['sizes']) set_item_has_size(true);
    }, [product])

    return (
        <div className="menu-item">
            <div className="d-flex">
                <div style={{ textAlign: 'end' }} className="mx-2">
                    <p className="f-15 font-weight-bold">
                        { product['name'] }
                    </p>
                    <p className="f-12">{ product['desc'] }</p>
                </div>

                <OverlayTrigger 
                    placement="left"
                    overlay={
                        <Tooltip style={{backgroundImage: 'white', border: 'none'}}>
                            <img src={`/products_images/${product['image']}`} />
                        </Tooltip>
                    }
                >
                    <img
                        src={`/products_images/${product['image']}`}
                        alt="product"
                    />
                </OverlayTrigger>

                
            </div>

            <div className="d-flex">
                <div
                    id={`add_buton_${product['id']}`}
                    className="d-flex flex-column justify-content-center add-button"
                    data-toggle={item_has_sizes ? "modal" : ""}
                    data-target={item_has_sizes ? "#size_options" : ""}
                    onClick={item_has_sizes ? setSizes : addTocart} 
                >
                    <i className="fa fa-plus" style={{color: 'white'}}></i>
                </div>
                <div className="d-flex flex-row-reverse align-items-center mx-4">
                    <span>{product['price']}</span>
                    <span className="mx-1">ج.م</span>
                </div>
            </div>
        </div>
    );
}

export default menuItem;