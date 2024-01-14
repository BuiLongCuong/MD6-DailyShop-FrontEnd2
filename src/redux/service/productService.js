import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios} from "./axios/getAxios";

export const getAll = createAsyncThunk(
    'products/getAll',
    async () => {
        let res = await getAxios().get("/suppliers/getAllProduct");
        return res.data;
    }
)
export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (idProduct) =>{
        let res = await getAxios().get("/suppliers/findProductById/" + idProduct);
        console.log(res)
        return res.data;
    }
)
export const getAllByIdUser = createAsyncThunk(
    'products/getAllByIdUser',
    async (id) => {
        let res = await getAxios().get("/suppliers/getProductByAccountId/" + id)
        return res.data
    }
)

export const add = createAsyncThunk(
    'products/add',
    async (newProduct) => {
        console.log(newProduct)
        let res = await getAxios().post("/suppliers/createProduct", newProduct)
        return res.data

    }
)

export const updateForm = createAsyncThunk(
    'products/editForm',
    async (id) => {
        let res = await getAxios().get("/suppliers/findProductById/" + id)
        return res.data
    }
)

export const UpdateService = createAsyncThunk(
    'products/edit',
    async (productEdit) => {
        console.log(productEdit)
        let res = await getAxios().put("/suppliers/editProduct/" + productEdit.productID, productEdit)
        return res.data
    }
)

export const Delete = createAsyncThunk(
    'products/delete',
    async (id) => {
        await getAxios().delete("/suppliers/deleteProduct/" + id)
        return id
    }
)

export const search = createAsyncThunk(
    'products/search',
    async (nameSearch)=>{
        let listProduct = await axios.get("/searchProduct?name=" + nameSearch)
        return listProduct.data
    }
)