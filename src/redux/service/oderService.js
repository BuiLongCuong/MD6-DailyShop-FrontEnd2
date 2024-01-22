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

export const removeProductInOrder = createAsyncThunk(
    'order/removeProductInOrder',
    async (id) => {
        await getCustomerUrl().delete("/account/removeOrderDetails/" + id)
        console.log(id)
        return id;
    }
)


export const updateQuantity = (productId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { productId, quantity },
});

export const updateTotalAmount = (totalAmount) => ({
    type: 'UPDATE_TOTAL_AMOUNT',
    payload: { totalAmount },
});