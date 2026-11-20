import React from "react";
export default function Listmethod(){
    const student=["Shoeb", "Nitin", "Khan", "Sultan"]
    return(
        <>
            {student.map((student,index)=>
            <h1 key={index}>{student}</h1>)}

        </>
    )

}
