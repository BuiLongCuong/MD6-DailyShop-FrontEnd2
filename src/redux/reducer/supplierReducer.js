import {createSlice} from "@reduxjs/toolkit";
import {signIn} from "../service/supplierService";

const initialState = {
    currentSupplier:JSON.parse(localStorage.getItem("currentSupplier"))
}
const userSlice = createSlice({
    name: "supplier/signIn",
    initialState,
    extraReducers: builder => {
        builder.addCase(signIn.fulfilled, (state, {payload}) => {
            localStorage.setItem("currentSupplier", JSON.stringify(payload))
            state.currentSupplier = payload;
        })
    }
})
export default userSlice.reducer