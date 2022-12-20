import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from "./cart.actions";
import { setUser, removeUser } from "./user.actions";

store.dispatch(setUser({ name: "Bob" }));
store.dispatch(addProduct({ id: 76, name: "milk" }));

store.subscribe(() => {
  console.log(store.getState());
});
