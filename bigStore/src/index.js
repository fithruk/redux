import store from "./store";
import "./index.scss";
import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from "./cart.actions";
import { setUser, removeUser } from "./user.actions";

const resultEl = document.querySelector(".counter__result");
const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

const onInc = () => {
  store.dispatch(setUser({ name: "Bob" }));
  store.dispatch(addProduct({ id: 76, name: "milk" }));
  store.dispatch(setUser({ name: "Vasya" }));
  store.dispatch(setLanguage("ua"));
};

const onDec = () => {
  store.dispatch(setLanguage("uk"));
};

const onRes = () => {
  store.dispatch(removeUser());
  store.dispatch(removeProduct(76));
};

incBtn.addEventListener("click", onInc);
decBtn.addEventListener("click", onDec);
resetBtn.addEventListener("click", onRes);

store.subscribe(() => {
  console.log(store.getState());
});
