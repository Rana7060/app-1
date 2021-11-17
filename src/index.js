import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

// to let redux store interact with react
import { Provider } from "react-redux";

//importing the reducer to use
import rootReducer from "./reducers/rootReducer";

// Redux store created
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
