import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import  {Routes,Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Home } from "./Pages/Home";
import { Register } from "./Components/Register";
import { ProtectedRoutes } from "./Services/ProtectedRoutes";
function App() {
  return (
    <div className="App">
    

    <>
    
    <BrowserRouter  basename='/reactapp6'>
    1
    <Routes>
    
    <Route path="/reactapp6"    element={<ProtectedRoutes />} />
    <Route  path="/reactapp2"  element={<Home />} />
    
    <Route  path="/login"  element={<Login />} />
    <Route path="/register" element= {<Register/>} />
    
    
    
    </Routes>
    
    
    </BrowserRouter>
    
    
    
    </>
    
    

    
    </div>
  );
}

export default App;
