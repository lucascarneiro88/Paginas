import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Perfil from "./pages/Perfil/Perfil";
import Contato from "./pages/Contato/Contato";

import Header from './Components/Header/Header'

function App() {
  return (
    <div className='App'>
    <Router> 
      <Header></Header> 
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="login" exact  element={<Login />} />
          <Route path="perfil" exact element={<Perfil />} />
          <Route path="contato" exact element={<Contato />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
