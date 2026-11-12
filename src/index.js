import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import "./index.scss"

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, value: state.value + 1 };
    case "DEC":
      return { ...state, value: state.value - 1 };
    case "RND":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

function Counter() {
  const [count, setCount] = React.useState(store.getState().value);

  React.useEffect(() => {
    return store.subscribe(() => {
      setCount(store.getState().value);
    });
  }, []);

  const valueClass =
    count > 0
      ? "counter__value--positive"
      : count < 0
        ? "counter__value--negative"
        : "counter__value--zero";

  return (
    <div className="counter">
      <div className="counter__title">Redux Counter</div>
      <div className={`counter__value ${valueClass}`}>{count}</div>
      <div className="counter__actions">
        <button
          className="counter__btn counter__btn--primary"
          onClick={() => store.dispatch({ type: "INC" })}
        >
          +1
        </button>
        <button
          className="counter__btn counter__btn--danger"
          onClick={() => store.dispatch({ type: "DEC" })}
        >
          -1
        </button>
        <button
          className="counter__btn counter__btn--outline counter__btn--full"
          onClick={() =>
            store.dispatch({
              type: "RND",
              payload: Math.floor(Math.random() * 11) - 5,
            })
          }
        >
          Random
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
);
