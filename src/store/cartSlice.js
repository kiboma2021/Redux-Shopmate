import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        total: 0,
    },
    reducers: {
        add(state, action){
            console.log(action.payload);

        },
        remove(state, action){

        },
    }

})

export const { add, remove } = cartSlice.actions;
export const cartReducer = createSlice.reducer;