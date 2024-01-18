import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios, getCustomerUrl, getSupplierUrl} from "./axios/getAxios";

export const getAllProductWithoutLogin = createAsyncThunk(
    'products/getAllProductWithoutLogin',
    async (page) => {
        let res = await getAxios().get(`/getAllProductIsDeleted?page=${page}`);
        return res.data;
    }
)
export const getProductTop = createAsyncThunk(
    'products/getProductTop',
    async () => {
        let res = await getAxios().get("/getProductTop");
        return res.data;
    }
)

export const getAllProduct = createAsyncThunk(
    'products/getAllProduct',
    async () => {
        let res = await getCustomerUrl().get("/customer/getAllProduct");
        return res.data;
    }
)

export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (idProduct) =>{
        let res = await getSupplierUrl().get("/products/" + idProduct);
        return res.data;
    }
)
export const getAllByIdUser = createAsyncThunk(
    'products/getAllByIdUser',
    async (id) => {
        let res = await getSupplierUrl().get("/suppliers/getProductByAccountId/" + id)
        return res.data
    }
)

export const add = createAsyncThunk(
    'products/add',
    async (newProduct) => {
        console.log(newProduct)
        let res = await getSupplierUrl().post("/suppliers/createProduct", newProduct)
        return res.data

    }
)

export const updateForm = createAsyncThunk(
    'products/editForm',
    async (id) => {
        let res = await getSupplierUrl().get("/suppliers/findProductById/" + id)
        return res.data
    }
)

export const UpdateService = createAsyncThunk(
    'products/edit',
    async (productEdit) => {
        console.log(productEdit)
        let res = await getSupplierUrl().put("/suppliers/editProduct/" + productEdit.productID, productEdit)
        return res.data
    }
)

export const Delete = createAsyncThunk(
    'products/delete',
    async (id) => {
        await getSupplierUrl().delete("/suppliers/deleteProduct/" + id)
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