import React from "react";
import { useSelector } from "react-redux";
import { selectQuote } from "./features/quoter/quoterSlice";
import { Quoter } from "./features/quoter/Quoter";
import "./App.css";

function App() {
    const quote = useSelector(selectQuote);

    const backgroundStyle = {
        backgroundColor: quote.background,
        transition: "background-color 1s",
    };

    return (
        <div className="App" style={backgroundStyle}>
            <header className="App-header">
                <Quoter />
            </header>
        </div>
    );
}

export default App;
