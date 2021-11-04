import React from "react";

const OperantButton = ({ operant, className, dispatch, type }) => {
    return (
        <button
            className={`${className ? className : ""} operant-btn`}
            onClick={() => {
                dispatch({ type, payload: operant });
            }}
        >
            {operant}
        </button>
    );
};

export default OperantButton;
