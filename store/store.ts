import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import modalSlice from "./slices/modalSlice";
import productSlice from "./slices/productSlice";

const store =  configureStore({
    reducer: {
        cart:cartSlice,
        auth:authSlice,
        modal:modalSlice,
        product:productSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({thunk:false})
})

// Types of root state and dispatch
type RootState = ReturnType<typeof store.getState>
type AppDispath = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispath>()

export default store