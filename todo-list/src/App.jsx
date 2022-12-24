import React from "react";
import { Provider } from "react-redux";

import TodoList from "./components/TodoList";
import store from "./store";
import "./index.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
