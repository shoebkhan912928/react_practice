import React from "react";

import {useState} from "react";
// function Counter(){
//     const [count, setCount]= useState(0);
//     return (

//         <>
//         <h2>Count {count}</h2>
//         <button onClick={()=>setCount(count + 1)}>Increment </button>
//         <button onClick={()=>setCount(count - 1)}>Decrement</button>
//         <button onClick={()=>setCount(0)}>Reset</button>
//         </>

//     )
// }
// export default Counter;

function Props({name,price}){

    return (
        <div>
            <h1>{name}</h1>
            <h1>{price}</h1>
        </div>
    )
}
export {Props}
function Counter(){
    const[count, setCount]= useState(0);
    return(
        <>
        <h1>Count : {count}</h1>
        <button style={{color:"green"}} onClick={()=>setCount(count + 1)}> Increment </button>
        <button style={{color:"blue"}} onClick={()=>setCount(count - 1)}>Decrement</button>
        <button style={{color:"red"}} onClick={()=>setCount(0)}>Reset</button>
        
        </>
    )
}
export default Counter;