import React from "react";

import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <div>
            <Switch>
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar={true} />
        </div>
    );
};

export default App;