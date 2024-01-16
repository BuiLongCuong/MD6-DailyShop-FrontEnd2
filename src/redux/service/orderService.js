import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios} from "./axios/getAxios";

export const addProductToOrders = createAsyncThunk(
    'order/addProductToOrders',
    async (data) => {
        let res = await getAxios().get("/customer/addProductToOrders/" + data.account.id, data);
        return res.data;
    }
)