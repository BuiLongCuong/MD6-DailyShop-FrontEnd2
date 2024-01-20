import {createSlice} from "@reduxjs/toolkit";
import {
    editSupplier,
    findSupplierByAccountId,
    getCurrentSupplierDetails,
    logout,
    signIn
} from "../service/supplierService";

const initialState = {
    currentSupplier: JSON.parse(localStorage.getItem("currentSupplier")),
    currentSupplierDetails: {

    },
    supplierDetails: {

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
            state.currentSupplierDetails = payload;
        })
        builder.addCase(findSupplierByAccountId.fulfilled, (state, {payload}) => {
            state.supplierDetails = payload;
        })
        builder.addCase(getCurrentSupplierDetails.fulfilled,(state, {payload}) => {
            state.currentSupplierDetails = payload;
        })
        builder.addCase(logout.fulfilled, (state, {payload}) => {
            state.currentSupplierDetails = payload;
            state.supplierDetails = payload;
        })
    },
})

export default userSlice.reducer