import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios} from "./axios/getAxios";

export const signIn = createAsyncThunk(
    'supplier/signIn',
    async (supplier) => {
        try {
            const res = await getAxios().post("/login", supplier)
            return res.data
        }catch (e){
            console.log(e)
        }
    }
)

export const editSupplier = createAsyncThunk(
    'supplier/editSupplier',
    async (supplierEdit) => {
        const res = await getAxios().put("/suppliers/edit/" + supplierEdit.account.id, supplierEdit)
        console.log(res.data)
        return res.data;
    }
)

export const findSupplierByAccountId = createAsyncThunk(
    'supplier/findByAccountId',
    async (id) => {
        const res = await getAxios().get("/suppliers/findByAccountId/" + id);
        return res.data;
    }
)


export const signUp = (newSupplier) => {
    return getAxios().post("suppliers/register", newSupplier)
}