/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

//les  importation de react

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./js/components/Navbar";
import HomePage from "./js/pages/HomePage";
import {HashRouter, Switch, Route} from  'react-router-dom';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import CustomersPage from "./js/pages/CustomersPage";
import CustomersPageWithPagination from "./js/pages/CustomerPageWithPagination";
import InvoicesPage from "./js/pages/InvoicesPage";

//console.log();

const App = () => {
    return(
        <HashRouter>
            <Navbar />
            <main className="container pt-5">
                <Switch>
                    <Route path="/customers" component={CustomersPage} />
                    <Route path="/invoices" component={InvoicesPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </main>
        </HashRouter>
    );
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);