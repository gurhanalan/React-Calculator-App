import React from "react";

const NumberButton = ({ number, dispatch }) => {
    return (
        <button
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: number })}
            className="number-btn"
        >
            {number}
        </button>
    );
};

export default NumberButton;
