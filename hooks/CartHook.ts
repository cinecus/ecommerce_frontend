import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { GET, POST } from '../API/index'
import { useAppDispatch } from "../store/store";
import { ADD_TO_CART, DECREASE_CART, DELETE_CART_ITEM, GET_CART } from '../API/api_route'
import { cartItemType, signinBodyType } from "../types";
import { getCart } from "../store/slices/cartSlice";
import { toggleModal } from "../store/slices/modalSlice";

export const useGetCart = () => {
    const dispatch = useAppDispatch()
    return useQuery('cart', async () => await GET(GET_CART), {
        onSuccess(data) {
            const payload = data.result.map((item: cartItemType, i: number) => {
                const cartObj = {
                    ...item,
                    product: item.productID,
                    key: i + 1
                }
                delete cartObj.productID

                return cartObj
            })
            dispatch(getCart(payload))
        },
        onError: (error) => {
            console.log('error', error)
        },
        retry:3
    })
}

export const useAddToCart = () => {
    const queryClient = useQueryClient()
    const dispatch = useAppDispatch()
    return useMutation('cart', async (request: { productID: string }) => await POST(ADD_TO_CART, {
        ...request,
        qty: 1
    }), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(['cart'])
            // queryClient.invalidateQueries(['me'])
            // console.log('data', data)
        },
        onError: (error) => {
            dispatch(toggleModal({ key: 'isAlertModalShow', status: 'open' }))
            console.log('error', error)
        }
    })
}

export const useDecreaseCart = () => {
    const queryClient = useQueryClient()
    return useMutation('cart', async (request: { productID: string }) => await POST(DECREASE_CART, {
        ...request,
        qty: 1
    }), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(['cart'])
            // queryClient.invalidateQueries(['me'])
            // console.log('data', data)
        },
        onError: (error) => {
            console.log('error', error)
        }
    })
}

export const useDeleteCartItem = () => {
    const queryClient = useQueryClient()
    return useMutation('cart', async (request: { cartID: string }) => await POST(DELETE_CART_ITEM, {
        ...request
    }), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(['cart'])
            // queryClient.invalidateQueries(['me'])
        },
        onError: (error) => {
            console.log('error', error)
        }
    })
}