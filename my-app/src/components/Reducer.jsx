import React from "react";
import {useReducer} from "react";
function reducer(state, action){
    switch(action.type){
        case "add":
            return {count: state.count + 1};
        case "remove":
            return {count: state.count - 1};
        case "reset":
            return {count: 0};
        default:
            return state;
    }

}
function Counterss (){
    const [state, dispatch]= useReducer(reducer, {count:0});
    return (
        <div>
            <p> {state.count}</p>
            <button onClick={()=>dispatch({type:"add"})}>Add</button>
            <button onClick={()=>dispatch({type:"remove"})}>Remove</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}
 export default Counterss;