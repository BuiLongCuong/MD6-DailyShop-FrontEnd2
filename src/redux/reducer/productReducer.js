import {createSlice} from "@reduxjs/toolkit";
import {
    add,
    Delete, findAllByCategoryId,

    getAllByIdUser, getAllProduct, getAllProductWithoutLogin,
    getProductById, getProductTop,
    search,
    updateForm,
    UpdateService
} from "../service/productService.js";

const initialState = {
    list: [],
    totalPages: 0,
    productEdit: {}

}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {

        builder.addCase(getAllProductWithoutLogin.fulfilled, (state, {payload}) => {
            state.list = payload.content;
            state.totalPages = payload.totalPages;
            console.log(state.list)
        })
        builder.addCase(getAllProduct.fulfilled, (state, {payload}) => {
            state.list = payload;            console.log(payload);

            console.log(state.list)
        })
        builder.addCase(getProductById.fulfilled, (state, {payload}) => {
            state.productEdit = payload;
        })
        builder.addCase(getAllByIdUser.fulfilled, (state, {payload}) => {
            // state.list = payload || [];
            state.list = payload;
            console.log(state.list);
        })
        builder.addCase(add.fulfilled, (state, {payload}) => {
            // console.log(payload)
            // console.log(state.list)
            if (!Array.isArray(state.list)) {
                state.list = [];
                state.list.push(payload);
            }else {
                state.list.push(payload);
            }
        })
        builder.addCase(updateForm.fulfilled, (state, {payload}) => {
            state.productEdit = payload
        })
        builder.addCase(UpdateService.fulfilled, (state, {payload}) => {
            for (let i = 0; i < state.list.length; i++) {
                if (state.list[i].productID === payload.productID) {
                    state.list[i] = payload
                }
            }
        })
        builder.addCase(Delete.fulfilled, (state, {payload}) => {
            for (let i = 0; i < state.list.length; i++) {
                if (state.list[i].id === payload) {
                    state.list.splice(i, 1);
                    break;
                }
            }
        })
        builder.addCase(search.fulfilled, (state, {payload}) => {
            state.list = payload
        })
        builder.addCase(findAllByCategoryId.fulfilled, (state, {payload}) => {
            state.list = payload
        })

    }
});
export default productSlice.reducer;