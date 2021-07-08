import React from 'react'
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import Dictionary from './Dictionary';
import Home from './Home'
function PageRoutes() {
    return (
        <Router>
            <Switch>
                <Route path="/dictionary">
                    <Dictionary />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default PageRoutes
