import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../styles/App.css";

import Login from "./Login";
import Friends from "./Friends";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
