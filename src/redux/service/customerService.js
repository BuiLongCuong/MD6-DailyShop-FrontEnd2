import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios} from "./axios/getAxios";

export const login = createAsyncThunk(
    'customer/login',
    async (customer) => {

        try {
            console.log(customer)
            const res = await getAxios().post("login", customer)
            return res.data
        }catch (e) {
            console.log(e)
        }
    }
)

export const register = (newCustomer) => {
    return getAxios().post("customer/register", newCustomer)
}