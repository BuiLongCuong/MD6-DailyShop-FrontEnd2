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
        builder.addCase(addProductToOrders.fulfilled, (state, {payload}) => {
            console.log(payload)
            // const {product, quantity} = payload;
            // const existingItem = state.listOrder.find((item) => item.orderDetails.product.productId === product.id);
            state.cart.or.push(payload);
        })
    }

})

export default orderSlice.reducer;
