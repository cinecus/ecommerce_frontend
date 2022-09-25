import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    isSigninShow: false,
    isSignupShow: false,
    isAlertModalShow:false,
    isRequestResetPasswordShow:false,
    isResetPasswordShow:false

}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        init: (state, action) => {

        },
        toggleModal: (state, action: { payload: { key: 'isSigninShow' | 'isSignupShow' | 'isAlertModalShow' |'isRequestResetPasswordShow' | 'isResetPasswordShow', status: 'open' | 'close' } }) => {
            const { key, status } = action.payload
            state[key] = status === 'open' ? true : false
        }
    }
})

export const { init,toggleModal } = modalSlice.actions

export default modalSlice.reducer