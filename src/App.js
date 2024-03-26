import React from "react";
import Home from "./pages/Home/Index";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import './mock'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<h1>Not-Foud 404</h1>}/>
      </Routes>    
    </BrowserRouter>
  
  );
}

export default App;
