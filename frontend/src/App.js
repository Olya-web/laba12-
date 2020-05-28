import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MainComponent } from './main';
import { Login } from './login';
import { Register } from './register';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <MainComponent />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
