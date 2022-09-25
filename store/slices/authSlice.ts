import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    me:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        init: (state, action) => {

        },
        getInfo:(state,action)=>{
            state.me = action.payload
        }
    }
})

export const { init,getInfo } = authSlice.actions

export default authSlice.reducer