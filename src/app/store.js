import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from './clothingSlice.js';

const store = configureStore({
    reducer: {
        clothing: clothingReducer,
    },
});

export default store;