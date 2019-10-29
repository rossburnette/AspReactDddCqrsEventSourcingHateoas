import React from "react";
import PageNotFound from "./PageNotFound";
import HomePage from "./home/HomePage";
import TestStartPage from "./test/TestStartPage";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/personality-test/start" component={TestStartPage} />
                <Route component={PageNotFound} />
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar={true} />
        </div>
    );
};

export default App;
