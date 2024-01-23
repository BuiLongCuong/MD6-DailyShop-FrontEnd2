import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios, getCustomerUrl} from "./axios/getAxios";

export const login = createAsyncThunk(
    'customer/login',
    async (customer) => {
            return await getCustomerUrl().post("login", customer).then(res => {
                const roles = res.data.roles;
                if (roles.length > 0) {
                    if (roles.some(role => role.authority === "ROLE_CUSTOMER")) {
                        return res.data
                    }
                }
                throw new Error('Sai tài khoản hoặc mật khẩu')
            }).catch(err => {
                throw new Error('Sai tài khoản hoặc mật khẩu')
            })
    }
)

export const editCustomer = createAsyncThunk(
    'customer/editCustomer',
    async (customerEdit) => {
        try {
            console.log(customerEdit)
            const res = await getCustomerUrl().put("/customer/edit/" + customerEdit.account.id, customerEdit)
            return res.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const findCustomerByAccountId = createAsyncThunk(
    'customer/findByAccountId',
    async (id) => {
        const res = await getCustomerUrl().get("/customer/findByAccountId/" + id);
        console.log(res.data)
        return res.data;
    }
)

export const getCurrentCustomerDetails= createAsyncThunk(
    "CURRENT_CUSTOMER_DETAILS",
    async () => {
        const res = await getCustomerUrl().get("/customer/current");
        return res.data;
    }
)

export const getCurrentCustomerLogin= createAsyncThunk(
    "CURRENT_CUSTOMER_LOGIN",
    async () => {
        const res = await getCustomerUrl().get("/customer/current");
        return res.data;
    }
)


export const register = (newCustomer) => {
    return getCustomerUrl().post("customer/register", newCustomer)
}
export const logout= createAsyncThunk(
    "LOGOUT",
    async ()=>{
        localStorage.removeItem("currentCustomer")
        return null
    }
)