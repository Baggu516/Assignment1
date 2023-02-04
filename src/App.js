import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Page1 from './Page1';
import  Page2 from "./Page2";
import { Link } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <h1>Fetched Data</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Page1/>}/>
        <Route path="spage"  element={<Page2/>}/>
      </Routes>
      <Link to="/"><button>Previous</button></Link>
    <Link to="spage"><button>Next</button></Link>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
