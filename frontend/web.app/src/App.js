import React from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <div id="wrapper" className="wrapper">
      <Header />
      <Switch>
		<Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
