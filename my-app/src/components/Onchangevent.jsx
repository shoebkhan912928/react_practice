import React, { useState } from "react";
function Onchangevent(){
    const[name, setName]= useState("");
    // console.log(name)
    function storename(e){
        setName(e.target.value);
        console.log(name)

    }
    return(
        <>
        <input type="text" value={name} onChange={storename} placeholder="Type your name "/>
        <h1>Name:{name}</h1>
        </>
    )
}
export default Onchangevent;