import {createSlice} from "@reduxjs/toolkit";
import {orderListForSupplier, showOrderList} from "../service/oderService";


const initialState = {
    cart: null,
    listOrderForSupplier: [],

}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: builder => {
        builder.addCase(showOrderList.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.cart = payload;
        })
        builder.addCase(orderListForSupplier.fulfilled, (state, {payload}) => {
            state.listOrderForSupplier = payload;
        })
    }

})

export default orderSlice.reducer;
