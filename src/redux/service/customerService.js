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

export const editCustomer = createAsyncThunk(
    'customer/editCustomer',
    async (customerEdit) => {
        const res = await getAxios().put("/customer/edit/" + customerEdit.account.id, customerEdit)
        return res.data
    }
)

export const findCustomerByAccountId = createAsyncThunk(
    'customer/findByAccountId',
    async (id) => {
        const res = await getAxios().get("/customer/findByAccountId/" + id);
        console.log(res.data)
        return res.data;
    }
)


export const register = (newCustomer) => {
    return getAxios().post("customer/register", newCustomer)
}