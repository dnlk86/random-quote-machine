import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quotes: [
        {
            author: "Daniel",
            text: "Ok Bi... promesso, dopo lo faccio...",
            color: "#FF5400",
        },
        { author: "Mariangela", text: "Rock & Roll!", color: "#ea84c9" },
        {
            author: "Tina",
            text: "Stonk...   ...   ...   ...   ...   ...   ...   ...   ...",
            color: "#9E0059",
        },
        { author: "Nenno", text: "...MGNAHHH!", color: "#84e6f8" },
    ],
    currentQuote: {
        author: "Pinco Pallino",
        text: "Quote di prova...",
        color: "#FFBD00",
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
