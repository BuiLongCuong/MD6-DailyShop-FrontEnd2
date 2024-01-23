import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios, getCustomerUrl, getSupplierUrl} from "./axios/getAxios";

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

export const countCartDetails = createAsyncThunk(
    'customer/countCartDetails',
    async () => {
        let res = await getCustomerUrl().get("/customer/countCartDetails")
        console.log(res.data);
        return res.data;
    }
)

export const transactionHistory = createAsyncThunk(
    'TransactionHistory',
        async () => {
            let res = await getCustomerUrl().get("/account/order")
            return res.data;
        }
)

export const orderListForSupplier = createAsyncThunk(
    'order/orderListForSupplier',
    async () => {
        let res = await getSupplierUrl().get("/suppliers/orderSupplier");
        return res.data
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
export const payment = createAsyncThunk(
    'payment/order',
    async () => {
        try {
            const res = await getCustomerUrl().get("/getOrderCustomer")
            return res.data
        } catch (e) {
            console.log(e)
        }

    }
)