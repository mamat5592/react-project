import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';

import './index.css';
import logo from './logo.svg';

import HomeComponent from './components/home/index';
import BMIComponent from './components/bmi/bmi_calculator';
import BGComponent from './components/background/index';
import SNComponent from './components/social network/components_container';
import MetronomeComponent from './components/metronome/index';

function App() {
    return (
        <Router>
            
                <img src={logo} className="App-logo" alt="logo" />
                
                <ul id="menu">
                    <a className="menu-button icon-plus" href="#menu" > </a>
                    <a className="menu-button icon-minus" href="#0" > </a>
                    <li className="menu-item">
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/bmi'>
                            BMI Calculator
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/background'>
                            Background
                        </Link>
                    </li>
                    <li className="menu-item">
                        <a href="#menu">
                            ___
                        </a>
                    </li>
                    <li className="menu-item">
                        <Link to='/social_network'>
                            Social Network
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/metronome'>
                            Metronome
                        </Link>
                    </li>
                    <li className="menu-item">
                        <a href="#menu">
                            ___
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#menu">
                            ___
                        </a>
                    </li>
                </ul>


            <Switch>
                <Route exact path = '/'>
                    <HomeComponent />
                </Route>
                <Route path = '/bmi'>
                    <BMIComponent />
                </Route>
                <Route path = '/background'>
                    <BGComponent />
                </Route>
                <Route path = '/background'>
                    <BGComponent />
                </Route>
                <Route path = '/social_network'>
                    <SNComponent />
                </Route>
                <Route path = '/metronome'>
                    <MetronomeComponent />
                </Route>
                <Route path = '/background'>
                    <BGComponent />
                </Route>
                <Route path = '/bmi'>
                    <BMIComponent />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />,document.getElementById('root'));

