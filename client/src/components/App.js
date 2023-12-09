/*
App.js file is responsible for all
the initial view layer setup
Whereas top level index.js is responsible
 for all our redux setup or
 all kind of data setup
 */

import React, {Component} from "react";

/* React Router Dom contains a set of
React router helpers, specifically themed around
allowing you to navigate around dom,
or at least an environment that uses the browser dom
 */

// BrowserRouter - can be thought as the brains of react router,
// it tells react router how to behave
// it looks at the current URL and then changes the set of components that
// are visible on the screen at any given time

// Route - is a react component that is used to set up a rule
// between a certain route that a user might visit and a set of components that
// will be actually visible on the screen.

import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import ProductList from "./products/ProductList";
// const Header = ()=> <div>Header</div>
// import Landing from "./Landing";
// import Dashboard from "./Dashboard";
// Header will always show
const Landing = ()=> <div>Here go the products list</div>

class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        {/*<ProductList />*/}
                        <Route exact path="/products" component={ProductList} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default connect(null, actions)(App);
/* The actions that are passed in, get assigned to the app component as props */
