import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    carts:[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        init: (state, action) => {

        },
        getCart:(state,action)=>{
            state.carts = action.payload
        }

    }
})

export const { init,getCart } = cartSlice.actions

export default cartSlice.reducer