import react from "react";
import {useState, useEffect,useRef} from "react";
function Searchbox(){
    const inputRef=useRef(null);
    function focusSearch(){
        inputRef.current.focus();
    
    }
    return (
        <>
        <input ref={inputRef} type="text" placeholder="Search..." />
        <button onClick={focusSearch}>Focus Search</button>
        </>
    )
}
export default Searchbox;