import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios} from "./axios/getAxios";

export const addProductToOrders = createAsyncThunk(
    'order/addProductToOrders',
    async (data) => {
        let res = await getAxios().get("/customer/addProductToOrders", data);
        console.log(res.data)
        return res.data;
    }
)

export const showOrderList = createAsyncThunk(
    'order/showOrderList',
    async () => {
        let res = await getAxios().get("/customer/cart");
        return res.data;
    }
)