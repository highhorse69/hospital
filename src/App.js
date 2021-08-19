import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Internship from './pages/Internship/Internship';
import About from './pages/About/About';
import Home from './pages/Home/Home';

import Gallery from './pages/Gallery/Gallery';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Internship" exact>
          <Internship/>
        </Route>
       
       
        <Route path="/Gallery" exact>
          <Gallery/>
        </Route>
        <Route path="/About" exact>
          <About/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;