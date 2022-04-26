import React from 'react';
import Header from './components/layout/Header'
import './App.css';
import Home from "./components/Home"
import Episodes from './components/Episodes';
import Blog from './components/Blog';
import Contact from './components/Contact'
import About from './components/About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
            <main>
              
              <Switch>
                
                <Route exact path='/'>
                  <Home/>
                </Route>
                
                
                <Route path='/Episodes'>
                  <Episodes/>
                </Route>
                
                <Route path='/Blog'>
                  <Blog/>
                </Route>
                
                <Route path='/Contact'>
                  <Contact/>
                </Route>
                
                <Route path='/About'>
                  <About/>
                </Route>
              
              </Switch>
             
             
            </main>
          
      </div>
    </Router>
    
  );
}

export default App;
