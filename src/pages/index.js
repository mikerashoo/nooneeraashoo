import React from 'react'
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import Dictionary from './Dictionary';
import Home from './Home'
import Tochoo from './Tochoo'
import Turito from './Turito'
import Shaahiyoo from './Shaahiyoo'
import Education from './Education'
import Generals from './Generals'
function PageRoutes() {
    return (
        <Router>
            <Switch>
                <Route path="/dictionary">
                    <Dictionary />
                </Route>
                <Route path="/tochoo">
                    <Tochoo />
                </Route>
                <Route path="/turito">
                    <Turito />
                </Route>
                <Route path="/shaahiyoo">
                    <Shaahiyoo />
                </Route>    
                <Route path="/education">
                    <Education />
                </Route>  
                <Route path="/general">
                    <Generals />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default PageRoutes
