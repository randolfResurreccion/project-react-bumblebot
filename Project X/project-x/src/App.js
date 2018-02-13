import React, { Component } from 'react';
// import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

loginHandler(e) {
  e.preventDefault();
  console.log("clicked");
}



  render() {
    return (
        <div>
          <Router>
              <div>
                <Route exact path="/register" component={Register} />
                <Route exact path="/" component={Login} />
              </div>
              
          </Router>
          
        </div>

    );
  }
}

export default App;
