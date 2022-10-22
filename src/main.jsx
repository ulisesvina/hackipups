import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import { Route } from 'wouter';

// Components
import Home from './components/Home';
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
        <Header/>
        <Route path="/" component={Home}/>
    </div>
  </React.StrictMode>
);