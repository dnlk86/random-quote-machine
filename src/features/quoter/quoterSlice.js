import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quotes: [
        {
            author: "Lao Tzu",
            text: "The journey of a thousand miles begins with one step.",
            color: "#FF5400",
        },
        {
            author: "John Lennon",
            text: "Life is what happens when you’re busy making other plans.",
            color: "#ea84c9",
        },
        {
            author: "Wayne Gretzky",
            text: "You miss 100 percent of the shots you never take.",
            color: "#9E0059",
        },
        {
            author: "John F. Kennedy",
            text: "Those who dare to fail miserably can achieve greatly.",
            color: "#84e6f8",
        },
        {
            author: "Charles Swindoll",
            text: "Life is ten percent what happens to you and ninety percent how you respond to it.",
            color: "#80b918",
        },
        {
            author: "Malcolm X",
            text: "The future belongs to those who prepare for it today.",
            color: "#4361ee",
        },
        {
            author: "Nelson Mandela",
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            color: "#be95c4",
        },
        {
            author: "Winston Churchill",
            text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            color: "#c8e7ff",
        },
        {
            author: "Tony Robbins",
            text: "The only impossible journey is the one you never begin.",
            color: "#d90429",
        },
    ],
    currentQuote: {
        author: "Babe Ruth",
        text: "Never let the fear of striking out keep you from playing the game.",
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
