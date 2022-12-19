import { increment, decrement, reset, store } from "./store";
import "./index.scss";

const resultEl = document.querySelector(".counter__result");
const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

const onInc = () => {
  store.dispatch(increment());
};

const onDec = () => {
  store.dispatch(decrement());
};

const onRes = () => {
  store.dispatch(reset());
};

incBtn.addEventListener("click", onInc);
decBtn.addEventListener("click", onDec);
resetBtn.addEventListener("click", onRes);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  const currentValue = state.history.reduce((acc, next) => acc + +next, 0);
  const historyString = state.history.join("");
  resultEl.textContent =
    historyString.length === 0 ? "" : `${historyString} = ${currentValue}`;
});
