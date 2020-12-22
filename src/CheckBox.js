import React from "react";
import PropTypes from "prop-types";

function CheckBox(props) {
    return (
        <div>
            <input type={"checkbox"} id={props.id} value={props.id}/>
            <label htmlFor={props.id}>{props.body}</label>
        </div>
    )
}

CheckBox.propTypes = {
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default CheckBox