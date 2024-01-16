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
        try {
            console.log(customerEdit)
            const res = await getAxios().put("/customer/edit/" + customerEdit.account.id, customerEdit)
            return res.data
        } catch (e) {
            console.log(e)
        }
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

export const getCurrentCustomerDetails= createAsyncThunk(
    "CURRENT_CUSTOMER_DETAILS",
    async () => {
        const res = await getAxios().get("/customer/current");
        return res.data;
    }
)


export const register = (newCustomer) => {
    return getAxios().post("customer/register", newCustomer)
}