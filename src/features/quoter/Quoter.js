import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generate, selectQuote } from "./quoterSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./Quoter.module.css";

export function Quoter() {
    const quote = useSelector(selectQuote);
    const dispatch = useDispatch();

    const cardBackgroundColor = { "--color": quote.color };

    return (
        <div className={styles.cardBackground} style={cardBackgroundColor}>
            <div id="quote-box" className={styles.card}>
                <div id="text" className={styles.text}>
                    “{quote.text}”
                </div>
                <div id="author" className={styles.author}>
                    @{quote.author}
                </div>
                <div className={styles.footer}>
                    <a
                        id="tweet-quote"
                        href="https://twitter.com/intent/tweet"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            style={{ color: quote.color, width: "150px" }}
                        />
                    </a>

                    <button
                        id="new-quote"
                        className={styles.button}
                        aria-label="Generate a new random quote"
                        onClick={() => dispatch(generate())}
                    >
                        Next quote 🡢
                    </button>
                </div>
            </div>
        </div>
    );
}
