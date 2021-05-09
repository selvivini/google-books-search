import React from 'react'
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'
import NotFound from './pages/NotFound'
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path ="/" component = {Search}/>
       <Route exact path ="/saved" component= {Saved}/>
        <Route component={NotFound}/>
      </Switch>
  </Router>
  
  );
}

export default App;
