import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quotes: [
        { author: "1", text: "1 text", background: "#e63946" },
        { author: "2", text: "2 text", background: "#457b9d" },
        { author: "3", text: "3 text", background: "#1d3557" },
    ],
    currentQuote: {
        author: "Pinco Pallino",
        text: "Quote di prova...",
        background: "#f1faee",
    },
};

// handler function for generating always new quotes with a different author than the previous one
const genNewRandomQuote = (s) => {
    let idx = Math.floor(Math.random() * s.quotes.length);
    if (s.currentQuote.author === s.quotes[idx].author) {
        return genNewRandomQuote(s);
    } else {
        s.currentQuote = s.quotes[idx];
    }
};

export const quoterSlice = createSlice({
    name: "quoter",
    initialState,
    reducers: {
        generate: (state) => {
            genNewRandomQuote(state);
        },
    },
});

export const { generate } = quoterSlice.actions;

export const selectQuote = (state) => state.quoter.currentQuote;

export default quoterSlice.reducer;
