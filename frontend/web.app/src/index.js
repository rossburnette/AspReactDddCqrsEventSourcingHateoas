import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import App from './App';
import './css/style.css';
import './css/chatbot.css';
import * as serviceWorker from './serviceWorker';
import configureStore from "./redux/configureStore";
import history from "./history";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
    <ReduxProvider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </ReduxProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
