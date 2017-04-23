import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Signin from './auth/signin';
import Signup from './auth/signup';
import Signout from './auth/signout';
import NotFound from './pages/notFound';
import Header from './header';
import requireAuth from './hoc/require_authentication';

class App extends Component {


    render() {
        return (
            <Router>
                <div className="container">
                    <Header/>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/profile" component={requireAuth(Profile)}/>
                        <Route path="/signin" component={Signin}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/signout" component={Signout}/>

                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;