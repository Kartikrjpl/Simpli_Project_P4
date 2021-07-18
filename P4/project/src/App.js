import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Home from './Home';
import {HashRouter} from 'react-router-dom';
import PasswordChange from './PasswordChange';
import MainPage from './MainPage';
class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="app-routes">
                    <Switch>
                        <Route path="/login" component={MainPage} />
                        {/* <Route path="/register" component={Register} />
                        <Route path="/home" component={Home} /> */}
                        <Route path="/home" component={Home} />
                        <Route exact path="/" component={MainPage} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}



export default App;
