import {createSlice} from "@reduxjs/toolkit";
import {
    add,
    Delete, findAllByCategoryId,

    getAllByIdUser, getAllProduct, getAllProductWithoutLogin,
    getProductById,
    search,
    updateForm,
    UpdateService
} from "../service/productService.js";

const initialState = {
    list: [],
    productEdit:{

    }

}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {

        builder.addCase(getAllProductWithoutLogin.fulfilled,(state,{payload}) => {
            state.list = payload ;
        })
        builder.addCase(getAllProduct.fulfilled,(state,{payload}) =>{
            state.list = payload;
        })
        builder.addCase(getProductById.fulfilled,(state,{payload}) =>{
            state.productEdit = payload;
        })
        builder.addCase(getAllByIdUser.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
        builder.addCase(add.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.list.push(payload);
        })
        builder.addCase(updateForm.fulfilled, (state, {payload}) => {
            state.productEdit = payload
        })
        builder.addCase(UpdateService.fulfilled,(state,{payload})=>{
            for (let i = 0; i < state.list.length; i++) {
                if (state.list[i].productID===payload.productID){
                    state.list[i] = payload
                }
            }
        })
        builder.addCase(Delete.fulfilled,(state,{payload})=>{
            for (let i = 0; i < state.list.length; i++) {
                if (state.list[i].id===payload){
                    state.list.splice(i,1)
                }
            }
        })
        builder.addCase(search.fulfilled,(state,{payload})=>{
            state.list = payload
        })
        builder.addCase(findAllByCategoryId.fulfilled, (state, {payload}) => {
            state.list = payload
        })

    }
});
export default productSlice.reducer;