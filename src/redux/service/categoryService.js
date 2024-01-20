import {asyncThunkCreator, createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios, getSupplierUrl} from "./axios/getAxios";

export const getAllCategories = createAsyncThunk(
    'category/getAll',
    async ()=>{
        let res = await getSupplierUrl().get("/categories/getAllCategory")
        return res.data
    }
)