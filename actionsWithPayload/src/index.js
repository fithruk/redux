import store from "./store";
import { addNewUser, removeUserById } from "./users.actions";

store.dispatch(addNewUser({ id: 76, name: "Sarah" }));
store.dispatch(addNewUser({ id: 77, name: "Vasya" }));

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});
