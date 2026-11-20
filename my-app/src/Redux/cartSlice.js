import {createSlice} from "@reduxjs/toolkit";
// import { forwardRef } from "react";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload);
        },
        removeFromCart:(state,action)=>{
            state.items=state.items.filter(
                item=>item.id !==action.payload
            );
        }
    }
});
export const {addToCart, removeFromcart}=
cartSlice.actions;
export default cartSlice.reducer;