import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ServiceSlice from "./ServiceSlice";
import FavoritesSlice from "./FavoritesSlice";

const store = configureStore({
    reducer:{
        category:CategorySlice,
        service:ServiceSlice,
        favorites:FavoritesSlice
    }
})

export default store
