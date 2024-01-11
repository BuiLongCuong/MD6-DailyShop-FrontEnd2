import {asyncThunkCreator, createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios} from "./axios/getAxios";

export const getAllCategories = createAsyncThunk(
    'category/getAll',
    async ()=>{
        let res = await getAxios().get("/categories/getAllCategory")
        return res.data
    }
)