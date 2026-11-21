/* eslint-disable no-unused-vars */

import './App.css'
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from "./pages/Login.jsx";

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/login' element = {<Login/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
