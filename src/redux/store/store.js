import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../reducer/productReducer";
import categoryReducer from "../reducer/categoryReducer";


export const store = configureStore({
    reducer:{
        // supplier: supplierReducer,
        // customer : customerReducer,
        categories: categoryReducer,
        products: productReducer
    }
})