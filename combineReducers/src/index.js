import store from "./store";
import { reset, decrement, increment } from "./counter.actions";
import { addUser, deleteUser, updateUser } from "./users.actions";
import "./index.scss";

const resultEl = document.querySelector(".counter__result");
const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

const onInc = () => {
  store.dispatch(increment());
  store.dispatch(addUser({ id: 76, name: "Sarah" }));
};

const onDec = () => {
  store.dispatch(decrement());
  store.dispatch(deleteUser(76));
};

const onRes = () => {
  store.dispatch(reset());
  store.dispatch(updateUser(76, { name: "Vasya" }));
};

incBtn.addEventListener("click", onInc);
decBtn.addEventListener("click", onDec);
resetBtn.addEventListener("click", onRes);

store.subscribe(() => {
  console.log(store.getState());
  const { counter } = store.getState();
  resultEl.textContent = counter;
});
