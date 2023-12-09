import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <App />
    </Provider>);