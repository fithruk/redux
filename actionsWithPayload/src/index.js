import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

store.dispatch(addUser({ id: 76, name: "Sarah" }));
store.dispatch(addUser({ id: 77, name: "Vasya" }));
store.dispatch(deleteUser(76));

store.subscribe(() => {
  console.log(store.getState());
});
