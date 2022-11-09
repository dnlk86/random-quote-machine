import React from "react";
import { Quoter } from "./features/quoter/Quoter";
import { useSelector } from "react-redux";
import { selectQuote } from "./features/quoter/quoterSlice";
import "./App.css";

function App() {
    const quote = useSelector(selectQuote);
    const signatureColor = { "--color": quote.color };

    return (
        <div className="App">
            <Quoter />
            <p style={signatureColor}>dnlk86</p>
        </div>
    );
}

export default App;
