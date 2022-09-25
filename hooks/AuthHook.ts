import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/router";
import { GET, POST } from '../API/index'
import { useAppDispatch } from "../store/store";
import { SIGNIN, SIGNUP, SIGNOUT, REQUEST_RESET_PASSWORD, RESET_PASSWORD, ME } from '../API/api_route'
import { signinBodyType, ResponseType, signupBodyType } from "../types";
import { getInfo } from "../store/slices/authSlice";
import { toggleModal } from "../store/slices/modalSlice";


export const useSignUp = () => {
    const dispatch = useAppDispatch()
    const router = useRouter();
    return useMutation<ResponseType, Error, Omit<signupBodyType, 'repassword'>>('signup', async (request: Omit<signupBodyType, 'repassword'>) => await POST(SIGNUP, request), {
        onSuccess: (data) => {
            dispatch(toggleModal({ key: 'isSignupShow', status: "close" }))
            dispatch(getInfo(data.result))
            router.push('/')
        },
        onError: (error) => {
            console.log('error', error)
        }
    })
}

export const useSignIn = () => {
    const dispatch = useAppDispatch()
    const router = useRouter();
    return useMutation<ResponseType, Error, signinBodyType>('signin', async (request: signinBodyType) => await POST(SIGNIN, request), {
        onSuccess: (data) => {
            dispatch(toggleModal({ key: 'isSigninShow', status: "close" }))
            dispatch(getInfo(data.result))
            router.push('/')
        },
        onError: (error) => {
            console.log('error', error)
        }
    })
}

export const useGetMe = () => {
    const dispatch = useAppDispatch()
    return useQuery<ResponseType, Error>('me', async () => await GET(ME), {
        onSuccess(data) {
            dispatch(getInfo(data.result))
        },
        onError: (error) => {
            console.log('error', error)
        },
        retry: 3
    })
}

export const useSignOut = () => {
    const dispatch = useAppDispatch()
    const router = useRouter();
    return useMutation<ResponseType, Error>('signout', async () => await POST(SIGNOUT, {}), {
        onSuccess(data) {
            dispatch(getInfo(null))
            router.push('/')
        },
        onError: (error) => {
            console.log('error', error)
        }
    })
}

export const useRequestResetPassword = () => {
    const dispatch = useAppDispatch()
    const router = useRouter();
    return useMutation<ResponseType, Error, { email: string }>('requestResetPassword', async (request: { email: string }) => await POST(REQUEST_RESET_PASSWORD, request), {
        onSuccess: (data) => {
            setTimeout(() => {
                dispatch(toggleModal({ key: 'isRequestResetPasswordShow', status: "close" }))
            }, 5000)
            // router.push('/')
        },
        onError: (error) => {
            console.log('error', error)
        }
    })
}

export const useResetPassword = () => {
    const dispatch = useAppDispatch()
    const router = useRouter();
    return useMutation<ResponseType, Error, { password: string, token: string }>('resetPassword', async (request: { password: string, token: string })=>await POST(RESET_PASSWORD,request),{
        onSuccess:()=>{
            setTimeout(() => {
                dispatch(toggleModal({ key: 'isResetPasswordShow', status: "close" }))
            }, 5000)
            router.push('/')
        },
        onError:(error)=>{
            console.log('error',error)
        }
    })
}