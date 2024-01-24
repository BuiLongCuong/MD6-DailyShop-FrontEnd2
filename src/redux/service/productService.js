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
    async (idProduct) => {
        let res = await getAxios().get("/products/" + idProduct);
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
    async (res)=>{

        if (res.minPrice!==null && res.maxPrice!==null){
            let listProduct = await getAxios().get(`/searchProduct?name=${res.nameSearch}&minPrice=${res.minPrice||0}&maxPrice=${res.maxPrice||0}`)
            console.log(listProduct)
            return listProduct.data
        }else {
            let listProduct = await getAxios().get(`/searchProduct?name=${res.nameSearch}`)
            console.log(listProduct)
            return listProduct.data
        }

    }
)

export const searchIncresePrice = createAsyncThunk(
    'products/search/incresePrice',
    async (res)=>{
        try {
            let listProduct = await getAxios().get(`/searchProductByNamePrice?name=${res}`)
            console.log(listProduct.data)
            return listProduct.data
        }catch (e){
            console.log(e)
        }

    }
)

export const searchDecresePrice = createAsyncThunk(
    'products/search/decresePrice',
    async (res)=>{
        try {
            let listProduct = await getAxios().get(`/searchProductByName?name=${res}`)
            console.log(listProduct.data)
            return listProduct.data
        }catch (e){
            console.log(e)
        }

    }
)



export const findAllByCategoryId = createAsyncThunk(
    'product/findAllById',
    async (id) => {
        const res = await getAxios().get("/category/" + id)
        return res.data
    }
)