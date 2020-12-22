import React from "react";
import PropTypes from "prop-types";

function Jokes(props) {
    return (
        <div>
            <div>{props.question ? "Question:" : ""} {props.question}</div>
            <div>{props.punchLine}</div>
        </div>
    )
}

Jokes.propTypes = {
    question: PropTypes.string,
    punchLine: PropTypes.string
}

export default Jokes