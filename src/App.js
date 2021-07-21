import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './CoderClump/Home'
import Google_Login from './CoderClump/Google_Login';
function App() {

  return (
    <div>
        <Router>
                    <div> 
                        <Switch>
                            <Route exact path='/' component={Google_Login}></Route>
                            <Route path='/home' component={Home}></Route>
                        </Switch>
                    </div>
                </Router>
    </div>
  );
}

export default App;
