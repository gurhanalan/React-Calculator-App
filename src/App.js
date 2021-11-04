import NumberButton from "./components/NumberButton";
import OperantButton from "./components/OperantButton";
import { useReducer } from "react";
import { reducer, initialState } from "./Reducer";

const numberFormatter = (stringNumber) => {
    if (stringNumber.length === 0) {
        return "";
    }
    let integer, decimal;
    if (stringNumber.includes(".")) {
        [integer, decimal] = stringNumber.split(".");
    } else {
        integer = stringNumber;
    }

    integer = String(
        new Intl.NumberFormat("en-US", {
            style: "decimal",
        }).format(integer)
    );
    if (decimal) {
        return [integer, decimal].join(".");
    }

    return integer;
};

// console.log(numberFormatter("233333333.44555"));

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <main>
            <div className="calculator">
                <div className="display">
                    <div className="prev-diplay">{`${numberFormatter(
                        state.prevDisplay
                    )} ${state.operant}`}</div>
                    <div className="current-display">
                        {numberFormatter(state.currDisplay)}
                    </div>
                </div>
                <OperantButton
                    operant="AC"
                    className="span2"
                    dispatch={dispatch}
                    type="CLEAR_ALL"
                />
                <OperantButton
                    operant="DEL"
                    dispatch={dispatch}
                    type="DELETE_DIGIT"
                />
                <OperantButton operant="/" dispatch={dispatch} type="OPERANT" />
                <NumberButton number="1" dispatch={dispatch} />
                <NumberButton number="2" dispatch={dispatch} />
                <NumberButton number="3" dispatch={dispatch} />
                <OperantButton operant="*" dispatch={dispatch} type="OPERANT" />

                <NumberButton number="4" dispatch={dispatch} />
                <NumberButton number="5" dispatch={dispatch} />
                <NumberButton number="6" dispatch={dispatch} />
                <OperantButton operant="+" dispatch={dispatch} type="OPERANT" />

                <NumberButton number="7" dispatch={dispatch} />
                <NumberButton number="8" dispatch={dispatch} />
                <NumberButton number="9" dispatch={dispatch} />
                <OperantButton operant="-" dispatch={dispatch} type="OPERANT" />

                <NumberButton number="." dispatch={dispatch} />
                <NumberButton number="0" dispatch={dispatch} />
                <OperantButton
                    operant="="
                    className="span2"
                    dispatch={dispatch}
                    type="EVALUATE"
                />
            </div>
        </main>
    );
}

export default App;
