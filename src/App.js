import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Cosmetics from './components/Cosmetics'
import Toys from './components/Toys'
import Herbal from './components/Herbal'

function App() {
  return (
 
    <Router>
       <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/toys">
            <Toys/>
          </Route>
          <Route path="/herbal">
            <Herbal/>
          </Route>
          <Route path="/cosmetics">
            <Cosmetics/>
          </Route>
        </Switch>
      </div>
    </Router>

   
  );
}

export default App;
