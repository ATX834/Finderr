import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import UserContextProvider from './components/UserContextProvider';
import About from "./components/About"
import Home from "./components/Home"
import Users from "./components/Users"
import Categories from './components/Categories';
import Languages from './components/Languages';
import HourlyRate from './components/HourlyRate';
import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
            <Router>
                <UserContextProvider>
                    <Navbar />
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/categories">
                            <Categories />
                        </Route>
                        <Route path="/languages">
                            <Languages />
                        </Route>
                        <Route path="/hourly-rate">
                            <HourlyRate />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </UserContextProvider>
            </Router>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));