import React from "react";
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
