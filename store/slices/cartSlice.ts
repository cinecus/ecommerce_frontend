import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        init: (state, action) => {

        }

    }
})

export const { init } = cartSlice.actions

export default cartSlice.reducer