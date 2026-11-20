import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
export const Reduxcomponent=()=>{
    const dispatch=useDispatch();
    const cartItems=useSelector(
        state=>state.cart.items
    );
    const product ={
        id:1,
        name:"Laptop",
        price:50000
    };
    return(
        <>
        <h2>Here is redux operation is execute </h2>
        <h2>{product.name}</h2>
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
      <p>Cart Itmes : {cartItems.length}</p>
        </>
    )
}