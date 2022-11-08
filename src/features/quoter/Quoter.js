import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generate, selectQuote } from "./quoterSlice";
import styles from "./Quoter.module.css";

export function Quoter() {
    const quote = useSelector(selectQuote);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.row}>
                <span className={styles.value}>
                    {quote.author}: "{quote.text}"
                </span>
                <button
                    className={styles.button}
                    aria-label="Generate a new random quote"
                    onClick={() => dispatch(generate())}
                >
                    Click here!
                </button>
            </div>
        </div>
    );
}
