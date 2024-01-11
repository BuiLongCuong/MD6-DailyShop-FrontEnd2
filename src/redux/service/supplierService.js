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

export const signUp = (newSupplier) => {
    return getAxios().post("suppliers/register", newSupplier)
}