import React, { useReducer } from "react";
function Reducers(state, action) {
    switch (action.type) {
        case "increase":
            return { count: state.count + 1 }
        case "dicrement":
            return { count: state.count - 1 }
        default:
            return state;
    }


}
function Calcu() {
    const [state, dispatch] = useReducer(Reducers, { count: 0 });
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increase" })}>Increase </button>
            <button onClick={() => dispatch({ type: "dicrement" })}>Dicrement</button>
        </>
    )
}
export default Calcu;