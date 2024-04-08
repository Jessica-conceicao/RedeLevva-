import React from "react";
import Home from './pages/Home/Index';
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";

import './mock'
import GuestRoute from "./routes/GuestRoute";
import store from "./store/";

function App() {
  
  return (
    <Provider store={store}> 
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<h1>Not-Foud 404</h1>}/>
      </Routes>    
    </BrowserRouter>
    </Provider>

  
  );
}

export default App;
