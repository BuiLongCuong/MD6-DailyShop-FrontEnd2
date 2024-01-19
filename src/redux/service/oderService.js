import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios, getCustomerUrl} from "./axios/getAxios";

export const addProductToOrders = createAsyncThunk(
    'order/addProductToOrders',
    async (data) => {
        let res = await getCustomerUrl().post("/customer/addProductToOrders", data);
        return res.data;
    }
)

export const showOrderList = createAsyncThunk(
    'order/showOrderList',
    async () => {
        let res = await getCustomerUrl().get("/customer/cart");
        return res.data;
    }
)