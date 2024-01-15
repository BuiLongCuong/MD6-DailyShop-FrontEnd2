import {createSlice} from "@reduxjs/toolkit";
import {getAllDistrict, getAllProvince, getAllWard} from "../service/addressService";

const initialState = {
    listProvince: [],
    listDistrict: [],
    listWard: [],
}
const addressSlice = createSlice({
    name: "address",
    initialState,
    extraReducers: builder => {
        builder.addCase(getAllProvince.fulfilled, (state, {payload}) => {
            state.listProvince = payload;
        })
        builder.addCase(getAllDistrict.fulfilled, (state, {payload}) => {
            state.listDistrict = payload;
        })
        builder.addCase(getAllWard.fulfilled, (state, {payload}) => {
            state.listWard = payload;
        })
    }
})
export default addressSlice.reducer