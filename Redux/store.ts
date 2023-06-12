import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ServiceSlice from "./ServiceSlice";

const store = configureStore({
    reducer:{
        category:CategorySlice,
        service:ServiceSlice
    }
})

export default store
