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

export const supplierRights = createAsyncThunk(
    'order/supplierRights',
    async (data) => {
        console.log(data)
        let res = await getSupplierUrl().put("/suppliers/updateOrder/" + data.orderId, data);
        return res.data
    }
)


export const increasingQuantityCart = createAsyncThunk(
    'INCREASING_QUANTITY',
    async (cartDetail) => {
        let res = await getCustomerUrl().put(`/account/updateCartDetail/${cartDetail.id}?quantity=${cartDetail.quantity}`);
        console.log(res.data);
        return cartDetail;
    }
);

export const decreasingQuantityCart = createAsyncThunk(
    'DECREASING_QUANTITY',
    async (cartDetail) => {
     return  await getCustomerUrl().put(`/account/updateCartDetail/${cartDetail.id}?quantity=${cartDetail.quantity}`).then(res => {
         if(cartDetail.quantity < 0 || cartDetail.quantity === 0) {
             throw new Error('Số lượng sản phẩm không được về 0')
         }else {
             console.log(res.data);
             return cartDetail;
         }
     }).catch(err => {
         throw new Error('Số lượng sản phẩm không được về 0')
     })


    }
);

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