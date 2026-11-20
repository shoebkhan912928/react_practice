import React, { useMemo, useState }  from "react";
function Usememo(){
    const[number, setNumber]= useState(5);
    const[count, setCount]=useState(0)
    const result=useMemo(()=>{
        console.log("calculation is running ");
        return number * number;

    },[number])
    return(
        <>
        <h1>Square :{result}</h1>
        <button onClick={()=>setNumber(number + 1)}> Change Number</button>
        <button onClick={()=>setCount(count + 1)}> count change </button>
        </>
    )
}
export default Usememo;