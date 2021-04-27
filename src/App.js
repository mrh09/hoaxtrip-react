import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Component/Pages/Home'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
