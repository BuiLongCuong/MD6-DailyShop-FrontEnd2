import {createSlice} from "@reduxjs/toolkit";
import {addProductToOrders, showOrderList} from "../service/oderService";


const initialState = {
    cart: null,


}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: builder => {
        builder.addCase(showOrderList.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.cart = payload;
        })

    }

})

export default orderSlice.reducer;
