import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import rootReducer from './redux/reducers';

import { startChat, chatMiddleware } from './redux/redux-socket/redux-socket';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(createEpicMiddleware(rootEpic), loggerMiddleware)
  applyMiddleware(loggerMiddleware, chatMiddleware)
);

startChat(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
