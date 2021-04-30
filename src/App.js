import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Component/Pages/Home';
import Adventure from './Component/Pages/Adventure';
import Services from './Component/Pages/Services';
import SignUp from './Component/Pages/SignUp';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/adventures' exact component={Adventure}/>
            <Route path='/services' exact component={Services}/>
            <Route path='/sign-up' exact component={SignUp}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
