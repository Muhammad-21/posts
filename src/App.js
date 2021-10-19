import React from "react";
import { BrowserRouter,Redirect } from "react-router-dom";
import '../src/styles/App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";




function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        <Redirect to="/error"/>
    </BrowserRouter>
  )
}

export default App;
