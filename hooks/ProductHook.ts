import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/router";
import { GET, POST } from '../API/index'
import { useAppDispatch } from "../store/store";
import { GET_PRODUCT } from '../API/api_route'

import { toggleModal } from "../store/slices/modalSlice";
import { getProduct } from "../store/slices/productSlice";

export const useGetProductList = () => {
    const dispatch = useAppDispatch()
    return useQuery('product', async () => await GET(GET_PRODUCT), {
        onSuccess(data) {
            dispatch(getProduct(data.result))
        },
        onError: (error) => {
            console.log('error', error)
        }
    })
}