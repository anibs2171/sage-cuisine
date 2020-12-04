import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'; 
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import Browse from "./pages/browse" 
import Footer from './components/Footer'
import ItemPage from './pages/items'


function App() {
  
  return ( 
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/browse' component={Browse} />
          <Route path='/items' component={ItemPage}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
