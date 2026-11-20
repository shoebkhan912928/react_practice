import React, { useId } from "react";
function Useid(){
    const id=useId()
    console.log(id)

    return(
        <>
        <label htmlFor={id}>Emailssssssssssssssssss</label>
        <input type="email" id={id}/>
        </>
    )
}
export default Useid;