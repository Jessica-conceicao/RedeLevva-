import React from "react";

import Home from './pages/Home/Index';
import Login from "./pages/Login";



import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import Auth from "./Components/Auth";

import './mock'
//import GuestRoute from "./routes/GuestRoute";
import store from "./store/";

function App() {
  
  return (
    <Provider store={store}> 
          <BrowserRouter>
          <Auth>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Home/>}/>
      </Routes>    
      </Auth>
    </BrowserRouter>
    </Provider>

  
  );
}

export default App;
