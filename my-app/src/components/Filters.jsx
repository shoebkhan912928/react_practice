import React from "react";
import product from "./filter";
export const Filters=()=>{
    const electronic=product.filter(p=>p.category==="electronic")
    return(
        <>
        <h2>Electronic product </h2>
        <ul>
            {electronic.map(p=>(
                <li key={p.id}>{p.name}</li>
            ))}
        </ul>
        </>
    )
}