import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './components/pages/home';
import Profile from './components/pages/profile';
import Login from './components/pages/signin';
import Register from './components/pages/signup';
import Logout from './components/pages/signout';
import NotFound from './components/pages/notFound';
import Header from './components/header';
import requireAuthentication from './components/hoc/require_authentication';

const ComposedProfile = requireAuthentication(Profile);

const Routes = ({store}) => {
    return (
        <Router>
            <div>
                <Header/>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/signin" component={Login}/>
                    <Route path="/profile" component={ComposedProfile}/>
                    <Route path="/signup" component={Register}/>
                    <Route path="/signout" component={Logout}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
};


export default Routes;
