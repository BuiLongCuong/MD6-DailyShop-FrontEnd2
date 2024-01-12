import {createSlice} from "@reduxjs/toolkit";
import {editSupplier, findByAccountId, signIn} from "../service/supplierService";

const initialState = {
    currentSupplier:JSON.parse(localStorage.getItem("currentSupplier")),
    supplierInfoDetail: {

    },
    supplierSignInFirst: {

    }
}
const userSlice = createSlice({
    name: "supplier/signIn",
    initialState,
    extraReducers: builder => {
        builder.addCase(signIn.fulfilled, (state, {payload}) => {
            localStorage.setItem("currentSupplier", JSON.stringify(payload))
            state.currentSupplier = payload;
        })
        builder.addCase(editSupplier.fulfilled, (state, {payload}) => {
            state.supplierInfoDetail = payload.data
            state.supplierInfoDetail = state.supplierSignInFirst
        })
        builder.addCase(findByAccountId.fulfilled, (state, {payload}) => {
            state.supplierSignInFirst = payload.data;
        })
    },
})

export default userSlice.reducer