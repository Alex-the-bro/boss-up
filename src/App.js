import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header'
import './App.css';
import Home from "./components/Home"
import Episodes from './components/Episodes';
import Blog from './components/Blog';
import Contact from './components/Contact'
import About from './components/About';
import {Switch, Route, useLocation} from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    
      <div className="App">
          <Header/>
            <main>
              
             
              <Switch >
                
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
    
    
  );
}

export default App;
