import {createSlice} from "@reduxjs/toolkit";
import {addProductToOrders} from "../service/orderService";

const initialState = {
    listOrder: [],


}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: builder => {
        builder.addCase(addProductToOrders.fulfilled, (state, {payload}) => {
            state.listOrder.push(payload);
        })
    }

})

export default orderSlice.reducer;