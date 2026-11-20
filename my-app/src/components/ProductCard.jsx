import React from 'react';
const ProductCard=( {name,price})=>{
    return(
        <div>
            <h1>Product Card</h1>
            <p>This is a simple product card component.  what is going on  here is my code </p>
            <h1>Product name {name}</h1>
            <h1>Price : {price}</h1>
        </div>
    )

    
}
export default ProductCard;