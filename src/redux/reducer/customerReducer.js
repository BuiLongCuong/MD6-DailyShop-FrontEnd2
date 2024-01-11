import {createSlice} from "@reduxjs/toolkit";
import {login} from "../service/customerService";

const initialState = {
    currentCustomer : JSON.parse(localStorage.getItem("currentCustomer"))
}
const userSlice = createSlice ({
    name : "customer",
    initialState,
    extraReducers : builder => {
        builder.addCase(login.fulfilled, (state, {payload})=> {
            localStorage.setItem("currentCustomer",JSON.stringify(payload))
            state.currentCustomer = payload;
        })
    }
})

export default userSlice.reducer;