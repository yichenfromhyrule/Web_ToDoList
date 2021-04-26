import React from "react";
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import './App.css';
import LogIn from './pages/LogIn';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LogIn />
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
