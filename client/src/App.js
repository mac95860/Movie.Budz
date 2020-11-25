import React from 'react';
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/signup" component={SignUp}/>
          <Route exact path = "/login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
