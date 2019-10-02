import React from 'react';
import {Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
import PersonalityTestPage from "./components/test/PersonalityTestPage";
import Footer from "./components/common/Footer";
import AboutPage from "./components/about/AboutPage";
import CareersPage from "./components/careers/CareersPage";
import ChatbotPage from "./components/chatbot/ChatbotPage";

function App() {
    return (
        <div id="wrapper" className="wrapper">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/personality-test" component={PersonalityTestPage}/>
                <Route path="/chatbot" component={ChatbotPage}/>
                <Route path="/about-us" component={AboutPage}/>
                <Route path="/careers" component={CareersPage}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
