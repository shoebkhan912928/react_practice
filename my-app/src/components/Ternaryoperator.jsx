import React from "react";
function Ternaryoperator(){
    const isLoggindIn=false

    return(
        <>
            {isLoggindIn ?(
                <h2>Welcome user</h2>):
               ( <h2>Login paged..................................... </h2>)
            
        }
        </>
    )
}
export default Ternaryoperator;
function Logicaland(){
    const isAdmin=true

    return(
        <>
        {isAdmin && <h2>Admin dashboeard </h2>}
        </>
    )
}
export {Logicaland};

