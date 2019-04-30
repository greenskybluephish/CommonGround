import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { register } from "./serviceWorker"
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"




register()

ReactDOM.render(
  <Router>
      <App />
  </Router>
  , document.getElementById('root'))