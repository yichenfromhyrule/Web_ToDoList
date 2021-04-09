import React from "react";
import firebase from "firebase";
import './App.css';
import LogInAndSignUp from './components/LogInAndSignUp/LogInAndSignUp';
import Footer from './components/Footer/Footer';

function App() {
  var database = firebase.database();
  return (
    <div className="App">
      <LogInAndSignUp />
      <Footer />
    </div>
  );
}

export default App;
