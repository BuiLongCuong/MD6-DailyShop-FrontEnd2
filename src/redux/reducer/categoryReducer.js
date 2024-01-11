import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories} from "../service/categoryService";

const initialState = {
    list :[]
}
const categorySlice = createSlice({
    name:"categories",
    initialState,
    extraReducers : builder => {
        builder.addCase(getAllCategories.fulfilled,(state,{payload}) =>{
            // console.log(payload)
            state.list = payload
        })
    }
})
export default categorySlice.reducer