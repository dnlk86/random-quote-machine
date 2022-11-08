import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generate, selectQuote } from "./quoterSlice";
import styles from "./Quoter.module.css";

export function Quoter() {
    const quote = useSelector(selectQuote);
    const dispatch = useDispatch();

    return (
        <div>
            <div id="quote-box" className={styles.row}>
                <div>
                    <span id="author" className={styles.value}>
                        {quote.author}:{" "}
                    </span>
                    <span id="text" className={styles.value}>
                        "{quote.text}"
                    </span>
                </div>
                <div>
                    <a
                        id="tweet-quote"
                        href="https://twitter.com/intent/tweet"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        Tweet this quote!
                    </a>
                </div>
                <div>
                    <button
                        id="new-quote"
                        className={styles.button}
                        aria-label="Generate a new random quote"
                        onClick={() => dispatch(generate())}
                    >
                        Click here!
                    </button>
                </div>
            </div>
        </div>
    );
}
