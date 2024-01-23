import {createSlice} from "@reduxjs/toolkit";
import {countCartDetails, orderListForSupplier, removeProductInOrder, showOrderList} from "../service/oderService";


const initialState = {
    cart: null,
    countCartDetails : 0,
    transactionHistory: [],
    listOrderForSupplier: []

}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const cartDetails = state.cart.cartDetails.map((item) => {
                if (item.product.productID === productId) {
                    return {
                        ...item,
                        quantity,
                    };
                }
                return item;
            });
            state.cart = {
                ...state.cart,
                cartDetails,
            };
        },
        updateTotalAmount: (state, action) => {
            state.cart = {
                ...state.cart,
                totalAmount: action.payload.totalAmount,
            };
        },
    },
    extraReducers: builder => {
        builder.addCase(showOrderList.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.cart = payload;
        })
        builder.addCase(removeProductInOrder.fulfilled, (state, {payload}) => {
            console.log(payload)
            for (let i = 0; i < state.cart.cartDetails.length ; i++) {
                if(state.cart.cartDetails[i].id === payload){
                    state.cart.cartDetails.splice(i, 1)
                    break
                }
            }
        })
        builder.addCase(countCartDetails.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.countCartDetails = payload;
        })
        builder.addCase(orderListForSupplier.fulfilled, (state, {payload}) => {
            state.listOrderForSupplier = payload;
        })
    }

})

export const { updateQuantity, updateTotalAmount } = orderSlice.actions;

export default orderSlice.reducer;
