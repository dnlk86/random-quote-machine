import { configureStore } from "@reduxjs/toolkit";
import quoterReducer from "../features/quoter/quoterSlice";

export const store = configureStore({
    reducer: {
        quoter: quoterReducer,
    },
});
