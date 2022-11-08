import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quotes: [
        { author: "1", text: "1 text" },
        { author: "2", text: "2 text" },
        { author: "3", text: "3 text" },
    ],
    currentQuote: { author: "Pinco Pallino", text: "Quote di prova..." },
};

export const quoterSlice = createSlice({
    name: "quoter",
    initialState,
    reducers: {
        generate: (state) => {
            let idx = Math.floor(Math.random() * state.quotes.length);
            state.currentQuote = state.quotes[idx];
        },
    },
});

export const { generate } = quoterSlice.actions;

export const selectQuote = (state) => state.quoter.currentQuote;

export default quoterSlice.reducer;
