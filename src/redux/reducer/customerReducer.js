import {createSlice} from "@reduxjs/toolkit";
import {
    editCustomer,
    findCustomerByAccountId,
    getCurrentCustomerDetails, getCurrentCustomerLogin,
    login,
    logout
} from "../service/customerService";

const initialState = {
    currentCustomer: JSON.parse(localStorage.getItem("currentCustomer")),
    currentCustomerLogin: null,
    currentCustomerDetails: {},
    customerDetails: {},
}
const userSlice = createSlice({
    name: "customer",
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, {payload}) => {
            localStorage.setItem("currentCustomer", JSON.stringify(payload))
            state.currentCustomer = payload;
        })
        builder.addCase(getCurrentCustomerDetails.fulfilled, (state, {payload}) => {
            state.currentCustomerDetails = payload;
            state.currentCustomerLogin = state.currentCustomerDetails
        })
        builder.addCase(getCurrentCustomerLogin.fulfilled, (state, {payload}) => {
            state.currentCustomerLogin = payload;
        })
        builder.addCase(editCustomer.fulfilled, (state, {payload}) => {
            state.currentCustomerDetails = payload;
        })
        builder.addCase(findCustomerByAccountId.fulfilled, (state, {payload}) => {
            state.customerDetails = payload;
        })
        builder.addCase(logout.fulfilled, (state, {payload}) => {
            state.currentCustomerDetails = payload;
            state.currentCustomer = payload;
        })
    }
})

export default userSlice.reducer;