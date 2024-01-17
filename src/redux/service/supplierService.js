import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios, getSupplierUrl} from "./axios/getAxios";

export const signIn = createAsyncThunk(
    'supplier/signIn',
    async (supplier) => {
        return await getSupplierUrl().post("login", supplier).then(res => {
            const roles = res.data.roles;
            if (roles.length > 0) {
                if (roles.some(role => role.authority === "ROLE_SUPPLIER")) {
                    return res.data
                }
            }
            throw new Error('Sai tài khoản hoặc mật khẩu')
        }).catch(err => {
            throw new Error('Sai tài khoản hoặc mật khẩu')
        })
    }

)

export const editSupplier = createAsyncThunk(
    'supplier/editSupplier',
    async (supplierEdit) => {
        try {
            console.log(supplierEdit)
            const res = await getSupplierUrl().put("/suppliers/edit/" + supplierEdit.account.id, supplierEdit)
            return res.data;
        } catch (e) {
            console.log(e)
        }

    }
)

export const findSupplierByAccountId = createAsyncThunk(
    'supplier/findByAccountId',
    async (id) => {
        const res = await getSupplierUrl().get("/suppliers/findByAccountId/" + id);
        return res.data;
    }
)
export const getCurrentSupplierDetails= createAsyncThunk(
"CURRENT_SUPPLIER_DETAILS",
    async () => {
        const res = await getSupplierUrl().get("/suppliers/current");
        return res.data;
    }
)


export const signUp = (newSupplier) => {
    return getSupplierUrl().post("suppliers/register", newSupplier)
}