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

export const orderListForSupplier = createAsyncThunk(
    'order/orderListForSupplier',
    async () => {
        let res = await getSupplierUrl().get("/suppliers/orderSupplier");
        return res.data
    }
)

export const supplierRights = createAsyncThunk(
    'order/supplierRights',
    async (data) => {
        console.log(data.orderId, data.stringg)
        let res = await getSupplierUrl().patch("/suppliers/updateOrder/" + data.orderId, data.stringg);
        return res.data
    }
)