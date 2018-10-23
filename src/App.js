import React, {Component} from 'react';
import './App.less';
import {
    BrowserRouter as Router, Route, Link
} from 'react-router-dom'
import CVHome from './cv/cv-home/cv-home';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Link className="filler" to={"/cv"}>CV of Wang Andai</Link>
                    <Route path="/cv" component={CVHome} />
                </div>
            </Router>
        );
    }
}

export default App;
