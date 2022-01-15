import React, {useEffect, useState, useRef} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home/Home'
import Work from './components/work/Work'
import Works from './components/works/Works'

import QuestOne from './components/home/questions/page/DesignQuest'
import QuestTwo from './components/home/questions/page/FrontQuest'
import QuestThree from './components/home/questions/page/StartupQuest'

import NavbarDiff from './components/home/navbar/NavbarDiff'

import ScrollToTop from './ScrollToTop';

function App() {
  const [displayAnimation, setDisplayAnimation]=useState(true)


  return (
    <div  className="App">
      <Router>
        <ScrollToTop/>
        <Switch>

          <Route path="/questThree">
            <NavbarDiff/>
            <QuestThree/>    
          </Route>

          <Route path="/questTwo">
            <NavbarDiff/>
            <QuestTwo/>    
          </Route>

          <Route path="/questOne">
            <NavbarDiff/>
            <QuestOne/>    
          </Route>

          <Route path="/works">
            <NavbarDiff/>
            <Works/>    
          </Route>

          <Route path="/work">
            <NavbarDiff/>
            <Work/>    
          </Route>
          <Route path="/">
            <Home
              displayAnimation={displayAnimation}
              setDisplayAnimation={setDisplayAnimation}
            />    
          </Route>

        </Switch>
      </Router>
       
      </div>
  );
}

export default App;
