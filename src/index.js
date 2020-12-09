import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from 'react-router-dom';

import './index.css';
import logo from './logo.svg';

import HComponent from './components/home/index';
import BMIComponent from './components/bmi/bmi_calculator';
import BGComponent from './components/background/index';
import SNComponent from './components/social network/components_container';
import MComponent from './components/metronome/index';
import BCComponent from './components/bank card/index';
import BComponent from './components/base converter/index';

function App() {
    return (
        <Router>
            <img src={logo} className="App-logo" alt="logo" />

            <ul id="menu">
                <a className="menu-button icon-plus" href="#menu" > </a>
                <a className="menu-button icon-minus" href="#0" > </a>
                <li className="menu-item">
                    <Link to='/react-project/'>
                        Home
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to='/react-project/bmi'>
                        BMI Calculator
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to='/react-project/background'>
                        Background
                    </Link>
                </li>
                <li className="menu-item">
                    <a href="#menu">
                           ___
                    </a>
                </li>
                <li className="menu-item">
                    <Link to='/react-project/social-network'>
                        Social Network
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to='/react-project/metronome'>
                        Metronome
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to='/react-project/bank-card'>
                        Bank Card
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to='/react-project/base-converter'>
                        Base Converter
                    </Link>
                </li>
            </ul>


            <Switch>
                <Route exact path = '/react-project/'>
                    <HComponent />
                </Route>
                <Route path = '/react-project/bmi'>
                    <BMIComponent />
                </Route>
                <Route path = '/react-project/background'>
                    <BGComponent />
                </Route>
                <Route path = '/react-project/background'>
                    <BGComponent />
                </Route>
                <Route path = '/react-project/social-network'>
                    <SNComponent />
                </Route>
                <Route path = '/react-project/metronome'>
                    <MComponent />
                </Route>
                <Route path = '/react-project/bank-card'>
                    <BCComponent />
                </Route>
                <Route path = '/react-project/base-converter'>
                    <BComponent />
                </Route>
            </Switch>

        </Router>
    );
}

ReactDOM.render(<App />,document.getElementById('root'));

