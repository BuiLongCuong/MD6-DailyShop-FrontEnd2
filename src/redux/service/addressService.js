import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAxios} from "./axios/getAxios";

export const getAllProvince = createAsyncThunk(
    'address/getAllProvince',
    async () => {
        const res = await getAxios().get("/api/provinces")
        return res.data
    }
)

export const getAllDistrict = createAsyncThunk(
    'address/getAllDistrict',
    async (provinceId) => {
        const res = await getAxios().get("/api/districts/" + provinceId)
        return res.data
    }
)

export const getAllWard = createAsyncThunk(
    'address/getAllWard',
    async (districtId) => {
        const res = await getAxios().get("/api/wards/" + districtId)
        return res.data
    }
)

