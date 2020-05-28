import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MainComponent } from './main';
import { Login } from './login';
import { Register } from './register';
import { useAuth } from './helpers/useAuth';
import { AuthContext } from './helpers/auth.context';

function App() {
    const [isAuth, login, logout] = useAuth();
    return (
        <AuthContext.Provider value={[isAuth, login, logout]}>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact>
                            {isAuth ? <MainComponent /> : <Login />}
                        </Route>
                        <Route path="/login">
                            {isAuth ? <MainComponent /> : <Login />}
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
