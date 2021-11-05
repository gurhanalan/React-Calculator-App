export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_DIGIT":
            if (payload === "." && state.currDisplay.includes(".")) {
                return { ...state };
            } else if (
                state.currDisplay[0] === "0" &&
                payload !== "." &&
                !state.currDisplay[1]
            ) {
                return { ...state };
            }
            let newDisplay = state.currDisplay + payload;
            return { ...state, currDisplay: newDisplay };
        case "DELETE_DIGIT":
            let newDisplay2 = state.currDisplay.slice(0, -1);
            return { ...state, currDisplay: newDisplay2 };
        case "CLEAR_ALL":
            return { ...state, currDisplay: "", prevDisplay: "", operant: "" };

        case "OPERANT":
            if (!state.currDisplay && state.prevDisplay) {
                return { ...state, operant: payload };
            } else if (!state.operant) {
                return {
                    ...state,
                    prevDisplay: state.currDisplay,
                    currDisplay: "",
                    operant: payload,
                };
            }
            let result = evaluate();

            return {
                ...state,
                currDisplay: "",
                prevDisplay: result,
                operant: payload,
            };
        case "EVALUATE":
            if (!state.operant || !state.currDisplay || !state.prevDisplay) {
                return {
                    ...state,
                };
            }
            let result2 = evaluate();

            return {
                ...state,
                currDisplay: "",
                prevDisplay: result2,
                operant: "",
            };
        default:
            throw new Error();
    }

    function evaluate() {
        let result;
        switch (state.operant) {
            case "/":
                result =
                    parseFloat(state.prevDisplay) /
                    parseFloat(state.currDisplay);
                break;
            case "*":
                result =
                    parseFloat(state.prevDisplay) *
                    parseFloat(state.currDisplay);
                break;
            case "+":
                result =
                    parseFloat(state.prevDisplay) +
                    parseFloat(state.currDisplay);
                break;
            case "-":
                result =
                    parseFloat(state.prevDisplay) -
                    parseFloat(state.currDisplay);
                break;

            default:
                break;
        }

        return result.toString();
    }
};

export const initialState = {
    prevDisplay: "",
    currDisplay: "",
    operant: "",
};

