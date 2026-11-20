import React from "react";
function Clickevent(){
    function showMessage(){
        alert("welcome to react . ")

    }
    function inputEvent(){
        
    }
    return(
        <>
        <h1> Onclick event is happing here </h1>
        <button style={{background:"red"}} onClick={showMessage}>Click me</button>
        </>
    )
}
export default Clickevent;