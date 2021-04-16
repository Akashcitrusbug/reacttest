import React from 'react';
import Home from './components/Home/Home';
import CreatorDetailComponent from './components/CreatorDetails/CreatorDetailsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginComponent from './components/Login/LoginComponent';

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path={"/"} component={Home}></Route>
      <Route exact path={"/login"} component={LoginComponent}></Route>
      <Route exact path={"/creator-detail"} component={CreatorDetailComponent}></Route>        
      </div>
    </Router>
  );
}

export default App;
