import { createSlice } from "@reduxjs/toolkit";
import { productType } from "../../types";

const initialState: any = {
    productList: [],
    productShow: [],
    filteredProduct: {
        new: true,
        bestseller: true,
        suggest: true
    },
    filteredPrice: {
        min: 500,
        max: 2000
    },
    sortProduct: "A-Z"
}

const productSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        init: (state, action) => {

        },
        getProduct: (state, action) => {
            state.productList = action.payload
            state.productShow = action.payload
        },
        handleChangeFilterProduct: (state, action) => {
            const { type, value } = action.payload
            state.filteredProduct = {
                ...state.filteredProduct,
                [type]: value
            }
        },
        handleChangeFilterPrice: (state, action) => {
            state.filteredPrice = {
                min: action.payload[0],
                max: action.payload[1]
            }
        },
        resetFilter: (state, action) => {
            state.filteredPrice = {
                min: 500,
                max: 2000
            }
            state.filteredProduct = {
                new: true,
                bestseller: true,
                suggest: true
            }
        },
        filterProduct: (state, action) => {
            const filteredProductArr = Object.entries(state.filteredProduct).map(([key, value], i) => value ? key : null).filter(el => !!el)

            state.productShow = state.productList.filter((el: productType, i: number) => {
                const checkTag: boolean = filteredProductArr.some((item: any) => el.tags.includes(item))
                const checkPrice: boolean = el.price >= state.filteredPrice.min && el.price <= state.filteredPrice.max
                return checkTag && checkPrice
            })

        },
        handleSortProduct: (state, action: { payload: "A-Z" | "Z-A" | "Newest" | "Oldest" | "Low_Price" | "High_Price" }) => {
            state.sortProduct = action.payload
            switch (action.payload) {
                case "A-Z":
                    state.productShow = state.productShow.sort((a:any,b:any)=>{
                        let x = a.name.toLowerCase();
                        let y = b.name.toLowerCase();
                        if (x < y) {return -1;}
                        if (x > y) {return 1;}
                        return 0;
                    })
                    break;
                case "Z-A":
                    state.productShow = state.productShow.sort((a:any,b:any)=>{
                        let x = a.name.toLowerCase();
                        let y = b.name.toLowerCase();
                        if (x < y) {return 1;}
                        if (x > y) {return -1;}
                        return 0;
                    })
                    break;
                case "Newest":
                    state.productShow = state.productShow.sort((a:any,b:any)=>{
                        state.productShow = state.productShow.sort((a:any,b:any)=>{
                            let x = a.createAt;
                            let y = b.createAt;
                            if (x < y) {return 1;}
                            if (x > y) {return -1;}
                            return 0;
                        })
                    })
                    break;
                case "Oldest":
                    state.productShow = state.productShow.sort((a:any,b:any)=>{
                        let x = a.createAt;
                            let y = b.createAt;
                            if (x < y) {return -1;}
                            if (x > y) {return 1;}
                            return 0;
                    })
                    break;
                case "Low_Price":
                    state.productShow = state.productShow.sort((a:any,b:any)=>a.price-b.price)
                    break;
                case "High_Price":
                    state.productShow = state.productShow.sort((a:any,b:any)=>b.price-a.price)
                    break;
                default:
                    break;
            }

        }
    }
})

export const { init, getProduct, handleChangeFilterProduct, handleChangeFilterPrice, resetFilter, filterProduct, handleSortProduct } = productSlice.actions

export default productSlice.reducer