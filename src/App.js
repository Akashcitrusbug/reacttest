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
      <Switch>
      <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginComponent />
      </Route>
      <Route path="/creator-detail">
        <CreatorDetailComponent />
      </Route>        
      </div>
      </Switch>
    </Router>
  );
}

export default App;
