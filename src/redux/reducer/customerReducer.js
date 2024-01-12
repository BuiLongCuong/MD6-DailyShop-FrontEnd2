import {createSlice} from "@reduxjs/toolkit";
import {editCustomer, findByAccountId, login} from "../service/customerService";

const initialState = {
    currentCustomer : JSON.parse(localStorage.getItem("currentCustomer")),
    customerLoginFirst : {

    },
    customerInfoDetail : {

    }
}
const userSlice = createSlice ({
    name : "customer",
    initialState,
    extraReducers : builder => {
        builder.addCase(login.fulfilled, (state, {payload})=> {
            localStorage.setItem("currentCustomer",JSON.stringify(payload))
            state.currentCustomer = payload;
        })
        builder.addCase(editCustomer.fulfilled, (state, {payload}) => {
            state.customerInfoDetail = payload.data;
            state.customerInfoDetail = state.customerLoginFirst
        })
        builder.addCase(findByAccountId.fulfilled, (state, {payload}) => {
            state.customerLoginFirst = payload.data
        })
    }
})

export default userSlice.reducer;